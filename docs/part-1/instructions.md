---
id: drf-instructions
title: Instructions
prev: drf-overview

---

### Objectives

- Provision and setup a new project using Django Rest Framework (DRF)
- Add a `/wallets` endpoint to support persisting wallet data by adding a DRF Model, Serializer, and ViewSet
- Run and test endpoint


### Setup

Begin by forking the following repository, which contains some assets to get you started:

> [https://github.com/taliotech/django-meets-blockchain](https://github.com/taliotech/django-meets-blockchain)

Next, clone your fork of the repository locally and navigate to the clone folder in a terminal window. You should be able to run `git status` from the folder to confirm your clone is setup correctly.

```shell
git clone https://github.com/YOURUSERNAME/django-meets-blockchain.git
cd django-meets-blockchain
git status
```

Next, you'll need to launch the Vagrant virtual development environment:

```shell
vagrant up
```

This command will take several minutes to complete, as Vagrant will download the base image for the virtual machine (Ubuntu 18.04) and configure it for development by installing Node, Python, and Django. A Postgres database instance is also installed and configured to support the persistence layer. By developing within a VM, we can not only spin up a self-contained environment with all the required middleware, but we can also ensure more consistent, platform-agnostic results. Subsequent runs of `vagrant up` should complete much more quickly.

Vagrant facilitates development by sharing a local folder with the VM; this way you can edit source code on your host machine and execute it inside the guest VM. At this point, you should open the cloned repository folder `django-meets-blockchain` inside a text editor before proceeding.

Once the VM is up and running, SSH into the VM:

```shell
vagrant ssh
```

The command prompt should change, indicating you're interacting with the CLI of the VM and not your host machine.

### Scaffolding



```shell
# Set up a new project with a single application
django-admin startproject api
django-admin startapp core
cd ..
```

The project layout should look like:

```shell
ls -l
drwxr-xr-x 1 vagrant vagrant   224 Dec 13 20:29 api
drwxr-xr-x 1 vagrant vagrant   352 Dec 13 20:36 core
-rw-r--r-- 1 vagrant vagrant 40960 Dec 13 20:38 db.sqlite3
drwxr-xr-x 1 vagrant vagrant    96 Dec 13 20:05 etc
-rwxrwxr-x 1 vagrant vagrant   535 Dec 13 20:28 manage.py
-rw-r--r-- 1 vagrant vagrant    73 Dec 13 20:01 README.md
-rw-r--r-- 1 vagrant vagrant   148 Dec 13 20:11 requirements.txt
-rw-r--r-- 1 vagrant vagrant   790 Dec 13 20:19 Vagrantfile
```

> In the instructions that follow, file paths will be given relative to this folder, which should map to the repository root directory on the host machine

Now, sync your database for the first time:

```shell
python manage.py migrate
```

You'll also need to create an initial user named `admin` with a password of your choice. Note this password as you'll need to authenticate as that user later.

```shell
python manage.py createsuperuser --email admin@example.com --username admin
```

Once you've set up a database and the initial user is created and ready to go, open up the app's directory in a text editor to get coding!

### Adding an Endpoint

To create the `/wallets` endpoint, you'll need to code three main elements:

- The **Model** that defines the `Wallet` data structure
- The **Serializer** that reads and writes the model from and to its persistent state
- The **ViewSet** that controls how records are queried from the data store

#### Model

First, declare the model for `Wallet`. Nominally, you'll want to store two basic fields: the `address` and a descriptive `label`.  In `core/models.py`, do this by adding the following code:

```python
# Create your models here.

class Wallet(models.Model):
    label = models.CharField(max_length=255)
    address = models.CharField(max_length=255)

    def __str__(self):
        return u'{} ({})'.format(
            self.label,
            self.address
        )
```

#### Serializer

Next, add the serializer for `Wallet`. Create a new file called `core/serializers.py` and add the following code:

```python
from .models import Wallet
from rest_framework import serializers

class WalletSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Wallet
        fields = ('id', 'label', 'address')
```

Notice the field list includes the implicit `id` in addition to the two declared fields, `address` and `label`. Notice also that we're enabling hyperlinked relations in this case with `HyperlinkedModelSerializer`. You could also use primary key and various other relationships, but hyperlinking is good RESTful design.

#### ViewSet

Next, add the viewset declaration in `core/views.py` (leave the existing `import` statement and add the following code):

```python
from .models import Wallet
from .serializers import WalletSerializer
from rest_framework import viewsets

class WalletViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = Wallet.objects.all().order_by('id')
    serializer_class = WalletSerializer
```

Note this is a very simple query that returns all `Wallet` records, ordered by `id`.

#### Wiring

Finally, you'll need to configure the URL for the new endpoint and add the app into the project's settings.

In `api/urls.py`, _replace_ the existing code with the following:

```python
from django.conf.urls import url, include
from rest_framework import routers
from core import views as core_views

router = routers.DefaultRouter()
router.register(r'wallets', core_views.WalletViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
```

In `api/settings.py`, add entries for `rest_framework` and `core` to `INSTALLED_APPS`:

```json
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'core'
]
```

#### Add Migrations and Run the Server

Since you've added a new model, you need to create and run new migrations to update the database. Run the following two commands:

```
python manage.py makemigrations
python manage.py migrate
```

Finally, start the server (note this command should be executed _inside_ the VM) so you can test the app:

```
python manage.py runserver 0.0.0.0:8000
```

Now you should be able to access the new endpoint at [http://localhost:8000/wallets/](http://localhost:8000/wallets/)

Try adding a new wallet using the form, then reload the endpoint to make sure it was added. You can verify the data is correct by looking at the JSON output as well: [http://localhost:8000/wallets/?format=json](http://localhost:8000/wallets/?format=json)
