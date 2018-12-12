webpackJsonp([0x9926ef13129d],{336:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Django Meets Blockchain",sidebarTitle:"Django Meets Blockchain",sidebarSubtext:"Django Meets Blockchain",siteLastUpdated:"2018-12-12T16:59:29.333Z",version:"1.0",siteUrl:"https://taliotech.github.io/django-meets-blockchain-site",keywords:"talio,blockchain,django",author:{name:"Talio.io",url:"https://talio.ai",email:"info@talio.io"},socials:[{name:"Twitter",imgpath:"icon-twitter.svg",url:"TODO"},{name:"GitHub",imgpath:"icon-github.svg",url:"https://github.com/taliotech/django-meets-blockchain-site"},{name:"LinkedIn",imgpath:"icon-linkedin.svg",url:"TODO"},{name:"Medium",imgpath:"icon-medium.svg",url:"TODO"}]}},sectionList:{edges:[{node:{title:"Getting Started",items:[{id:"introduction",slug:"/getting-started/introduction/",title:"Introduction"},{id:"prerequisites",slug:"/getting-started/prerequisites/",title:"Prerequisites"}]}},{node:{title:"Part 1: Fundamentals",items:[{id:"drf-overview",slug:"/part-1/overview/",title:"Overview"},{id:"drf-instructions",slug:"/part-1/instructions/",title:"Instructions"}]}},{node:{title:"Part 2: Blockchain",items:[{id:"blockchain-overview",slug:"/part-2/overview/",title:"Overview"},{id:"blockchain-instructions",slug:"/part-2/instructions/",title:"Instructions"}]}}]},markdownRemark:{html:'<h3 id="setup"><a href="#setup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setup</h3>\n<p>Begin by forking the following repository, which contains some assets to get you started:</p>\n<blockquote>\n<p><a href="https://github.com/taliotech/django-meets-blockchain">https://github.com/taliotech/django-meets-blockchain</a></p>\n</blockquote>\n<p>Next, clone your fork of the repository locally and navigate to the clone folder in a terminal window. You should be able to run <code>git status</code> from the folder to confirm your clone is setup correctly.</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">git clone https://github.com/YOURUSERNAME/django-meets-blockchain.git\ncd django-meets-blockchain\ngit status</code></pre>\n      </div>\n<p>Next, you’ll need to launch the Vagrant virtual development environment:</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">vagrant up</code></pre>\n      </div>\n<p>This command will take several minutes to complete, as Vagrant will download the base image for the virtual machine (Ubuntu 18.04) and configure it for development by installing Node, Python, and Django. A Postgres database instance is also installed and configured to support the persistence layer. Subsequent runs of <code>vagrant up</code> should complete much more quickly.</p>\n<p>Vagrant facilitates development by sharing a local folder with the VM; this way you can edit source code on your host machine and execute it inside the guest VM. At this point, you should open the cloned repository folder <code>django-meets-blockchain</code> inside a text editor before proceeding.</p>\n<p>Once the VM is up and running, SSH into the VM:</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">vagrant ssh</code></pre>\n      </div>\n<p>The command prompt should change, indicating you’re interacting with the CLI of the VM and not your host machine.</p>\n<p>The Vagrant VM sets up a functioning Python 3.6 virtual environment, but before beginning, you’ll need to install some specific modules: <code>django</code>, <code>djangorestframework</code>, and <code>web3</code>. Use the Python package installer, <code>pip3</code>, to do this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">pip3 install django djangorestframework web3</code></pre>\n      </div>\n<h3 id="scaffolding"><a href="#scaffolding" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Scaffolding</h3>\n<p>Django and DRF provide good tools for building out a new project from scratch. So, from the initial directory (which should map to the repository clone’s root directory), execute the following commands:</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell"># Set up a new project with a single application\ndjango-admin startproject api . # note the . at the end\ndjango-admin startapp core</code></pre>\n      </div>\n<p>The project layout should look like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">ls -l\ndrwxr-xr-x 1 vagrant vagrant   224 Dec 13 20:29 api\ndrwxr-xr-x 1 vagrant vagrant   352 Dec 13 20:36 core\n-rw-r--r-- 1 vagrant vagrant 40960 Dec 13 20:38 db.sqlite3\ndrwxr-xr-x 1 vagrant vagrant    96 Dec 13 20:05 etc\n-rwxrwxr-x 1 vagrant vagrant   535 Dec 13 20:28 manage.py\n-rw-r--r-- 1 vagrant vagrant    73 Dec 13 20:01 README.md\n-rw-r--r-- 1 vagrant vagrant   148 Dec 13 20:11 requirements.txt\n-rw-r--r-- 1 vagrant vagrant   790 Dec 13 20:19 Vagrantfile</code></pre>\n      </div>\n<blockquote>\n<p>In the instructions that follow, file paths will be given relative to this folder, which should map to the repository root directory on the host machine</p>\n</blockquote>\n<p>Now, sync your database for the first time:</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">python manage.py migrate</code></pre>\n      </div>\n<p>You’ll also need to create an initial user named <code>admin</code> with a password of your choice. Note this password as you’ll need to authenticate as that user later.</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">python manage.py createsuperuser --email admin@example.com --username admin</code></pre>\n      </div>\n<p>Once you’ve set up a database and the initial user is created and ready to go, open up the app’s directory in a text editor to get coding!</p>\n<h3 id="adding-an-endpoint"><a href="#adding-an-endpoint" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding an Endpoint</h3>\n<p>To create the <code>/wallets</code> endpoint, you’ll need to code three main elements:</p>\n<ul>\n<li>The <strong>Model</strong> that defines the <code>Wallet</code> data structure</li>\n<li>The <strong>Serializer</strong> that reads and writes the model from and to its persistent state</li>\n<li>The <strong>ViewSet</strong> that controls how records are queried from the data store</li>\n</ul>\n<h4 id="model"><a href="#model" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Model</h4>\n<p>First, declare the model for <code>Wallet</code>. Nominally, you’ll want to store two basic fields: the <code>address</code> and a descriptive <code>label</code>.  In <code>core/models.py</code>, do this by adding the following code:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># Create your models here.</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Wallet</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    label <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">255</span><span class="token punctuation">)</span>\n    address <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">255</span><span class="token punctuation">)</span>\n\n    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> u<span class="token string">\'{} ({})\'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>\n            self<span class="token punctuation">.</span>label<span class="token punctuation">,</span>\n            self<span class="token punctuation">.</span>address\n        <span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h4 id="serializer"><a href="#serializer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Serializer</h4>\n<p>Next, add the serializer for <code>Wallet</code>. Create a new file called <code>core/serializers.py</code> and add the following code:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> <span class="token punctuation">.</span>models <span class="token keyword">import</span> Wallet\n<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> serializers\n\n<span class="token keyword">class</span> <span class="token class-name">WalletSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>HyperlinkedModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>\n        model <span class="token operator">=</span> Wallet\n        fields <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">\'id\'</span><span class="token punctuation">,</span> <span class="token string">\'label\'</span><span class="token punctuation">,</span> <span class="token string">\'address\'</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Notice the field list includes the implicit <code>id</code> in addition to the two declared fields, <code>address</code> and <code>label</code>. Notice also that we’re enabling hyperlinked relations in this case with <code>HyperlinkedModelSerializer</code>. You could also use primary key and various other relationships, but hyperlinking is good RESTful design.</p>\n<h4 id="viewset"><a href="#viewset" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ViewSet</h4>\n<p>Next, add the viewset declaration in <code>core/views.py</code> (leave the existing <code>import</code> statement and add the following code):</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> <span class="token punctuation">.</span>models <span class="token keyword">import</span> Wallet\n<span class="token keyword">from</span> <span class="token punctuation">.</span>serializers <span class="token keyword">import</span> WalletSerializer\n<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> viewsets\n\n<span class="token keyword">class</span> <span class="token class-name">WalletViewSet</span><span class="token punctuation">(</span>viewsets<span class="token punctuation">.</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token triple-quoted-string string">"""\n    This viewset automatically provides `list`, `create`, `retrieve`,\n    `update` and `destroy` actions.\n    """</span>\n    queryset <span class="token operator">=</span> Wallet<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>order_by<span class="token punctuation">(</span><span class="token string">\'id\'</span><span class="token punctuation">)</span>\n    serializer_class <span class="token operator">=</span> WalletSerializer\n</code></pre>\n      </div>\n<p>Note this is a very simple query that returns all <code>Wallet</code> records, ordered by <code>id</code>.</p>\n<h4 id="wiring"><a href="#wiring" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Wiring</h4>\n<p>Finally, you’ll need to configure the URL for the new endpoint and add the app into the project’s settings.</p>\n<p>In <code>api/urls.py</code>, <em>replace</em> the existing code with the following:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> django<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>urls <span class="token keyword">import</span> url<span class="token punctuation">,</span> include\n<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> routers\n<span class="token keyword">from</span> core <span class="token keyword">import</span> views <span class="token keyword">as</span> core_views\n\nrouter <span class="token operator">=</span> routers<span class="token punctuation">.</span>DefaultRouter<span class="token punctuation">(</span><span class="token punctuation">)</span>\nrouter<span class="token punctuation">.</span>register<span class="token punctuation">(</span>r<span class="token string">\'wallets\'</span><span class="token punctuation">,</span> core_views<span class="token punctuation">.</span>WalletViewSet<span class="token punctuation">)</span>\n\n<span class="token comment"># Wire up our API using automatic URL routing.</span>\n<span class="token comment"># Additionally, we include login URLs for the browsable API.</span>\nurlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>\n    url<span class="token punctuation">(</span>r<span class="token string">\'^\'</span><span class="token punctuation">,</span> include<span class="token punctuation">(</span>router<span class="token punctuation">.</span>urls<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    url<span class="token punctuation">(</span>r<span class="token string">\'^api-auth/\'</span><span class="token punctuation">,</span> include<span class="token punctuation">(</span><span class="token string">\'rest_framework.urls\'</span><span class="token punctuation">,</span> namespace<span class="token operator">=</span><span class="token string">\'rest_framework\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>In <code>api/settings.py</code>, add entries for <code>rest_framework</code> and <code>core</code> to <code>INSTALLED_APPS</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json">INSTALLED_APPS = <span class="token punctuation">[</span>\n    \'django.contrib.admin\'<span class="token punctuation">,</span>\n    \'django.contrib.auth\'<span class="token punctuation">,</span>\n    \'django.contrib.contenttypes\'<span class="token punctuation">,</span>\n    \'django.contrib.sessions\'<span class="token punctuation">,</span>\n    \'django.contrib.messages\'<span class="token punctuation">,</span>\n    \'django.contrib.staticfiles\'<span class="token punctuation">,</span>\n    \'rest_framework\'<span class="token punctuation">,</span>\n    \'core\'\n<span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<h4 id="add-migrations-and-run-the-server"><a href="#add-migrations-and-run-the-server" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Add Migrations and Run the Server</h4>\n<p>Since you’ve added a new model, you need to create and run new migrations to update the database. Run the following two commands:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code class="language-none">python manage.py makemigrations\npython manage.py migrate</code></pre>\n      </div>\n<p>Finally, start the server (note this command should be executed <em>inside</em> the VM) so you can test the app:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code class="language-none">python manage.py runserver 0.0.0.0:8000</code></pre>\n      </div>\n<p>Now you should be able to access the new endpoint at <a href="http://localhost:8000/wallets/">http://localhost:8000/wallets/</a></p>\n<p>Try adding a new wallet using the form, then reload the endpoint to make sure it was added. You can verify the data is correct by looking at the JSON output as well: <a href="http://localhost:8000/wallets/?format=json">http://localhost:8000/wallets/?format=json</a></p>\n<h4 id="add-validation"><a href="#add-validation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Add Validation</h4>\n<p>Our <code>Wallet</code> model is pretty basic at this point, so let’s add some validation logic to make it a bit more robust. Django supports both <a href="https://www.django-rest-framework.org/api-guide/validators/">default and custom validators</a>, so we’ll add one of each.</p>\n<p>Nominally, since each wallet address is unique, you’ll want to avoid creating multiple records for the same wallet address, so the first validator should check that there isn’t already a record using the same address. This can be handled cleanly via Django’s <code>UniqueValidator</code>, which can be declared inline in the model’s field declaration.</p>\n<p>In <code>core/models.py</code>, modify the <code>address</code> field declaration to include the <code>unique=True</code> directive. Additionally, you can change the length of the field to 42, which is the length of a valid blockchain address. The new declaration should look like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">address <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">42</span><span class="token punctuation">,</span> unique<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Test this by trying to add a second record using the same address; you should get an error messages.</p>\n<p>Additionally, it’d be good to make sure that the value for <code>Wallet.address</code> is actually a valid Ethereum wallet address. To do this, you’ll need to add a custom validator to the serializer in <code>core/serializers.py</code>.</p>\n<p>Web3 provides <a href="https://web3py.readthedocs.io/en/stable/overview.html?#addresses">a handy method</a> for performing this validation, so first, add the <code>import</code> directive for Web3 to the top of the file:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> web3 <span class="token keyword">import</span> Web3\n</code></pre>\n      </div>\n<p>Then, in the class body, add the validation function. Django automatically recognizes functions that follow the naming convention <code>validate_FIELDNAME</code> so the function should be named <code>validate_address</code>. Call <code>Web3.isAddress</code> and raise a <code>ValidationError</code> if the check fails; otherwise, return the value:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">  <span class="token keyword">def</span> <span class="token function">validate_address</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>\n      <span class="token triple-quoted-string string">"""\n      Check that the wallet address is valid\n      """</span>\n      <span class="token keyword">if</span> <span class="token operator">not</span> Web3<span class="token punctuation">.</span>isAddress<span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">:</span>\n          <span class="token keyword">raise</span> serializers<span class="token punctuation">.</span>ValidationError<span class="token punctuation">(</span><span class="token string">"Value must be a valid wallet address"</span><span class="token punctuation">)</span>\n      <span class="token keyword">return</span> value\n</code></pre>\n      </div>\n<p>Now, test this by trying to add a wallet with a random value for address to make sure the validation fails.</p>\n<h3 id="hello-blockchain"><a href="#hello-blockchain" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Hello, Blockchain!</h3>\n<p>Now that we’ve got a Wallet, let’s add some actual blockchain logic as a new endpoint within <code>/wallets</code>. We’ll start simply by adding an endpoint that checks the wallet’s balance, which, being a publicly available information, can be done using only the wallet’s address.</p>\n<p>Before you begin, though, you’ll need to access your <a href="https://infura.io">infura.io</a> account — or sign up for one if you didn’t already.</p>\n<p>In Infura, create a new project. Any name for the project will work; in the example screenshot below, we used <code>COLUMBUSTOKEN</code>.</p>\n<p>Once you’ve created a project, the first thing you’ll need to do is whitelist the address of the smart contract. The address to use is:</p>\n<blockquote>\n<p><code>0x07c344edD719A356775E1FBd852c63Dc46167B76</code></p>\n</blockquote>\n<p>Simply add the above to the project whitelist.</p>\n<p><img src="./infura.png" alt="infura-io-screenshot"></p>\n<p>Next, create a new file to contain the blockchain logic in the API called <code>core/services.py</code>.</p>\n<p>At the top of the file, you’ll need a few <code>import</code> statements:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">import</span> json\n<span class="token keyword">import</span> os\n<span class="token keyword">from</span> web3 <span class="token keyword">import</span> Web3\n</code></pre>\n      </div>\n<p>Web3.py is the library you’ll be using on both the server and client side to access the API.</p>\n<p>Next, you’ll need to grab the endpoint URL from your infura.io project page. The URL will have the following form:</p>\n<blockquote>\n<p><code>https://mainnet.infura.io/v3/&#x3C;INFURA_PROJECT_ID></code></p>\n</blockquote>\n<p><code>&#x3C;INFURA_PROJECT_ID></code> will be specific to your account, so copy the URL from the infura.io project page and declare it as a field in the code, then use that field to instantiate the Web3 class:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># Endpoint URL from</span>\nPROVIDER_ENDPOINT <span class="token operator">=</span> <span class="token string">"https://mainnet.infura.io/v3/&lt;INFURA_PROJECT_ID>"</span>\n\n<span class="token comment"># Instantiate the Web3 class using the custom endpoint</span>\nweb3 <span class="token operator">=</span> Web3<span class="token punctuation">(</span>Web3<span class="token punctuation">.</span>HTTPProvider<span class="token punctuation">(</span>PROVIDER_ENDPOINT<span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>First, in order to verify configuration and connectivity via Web3, let’s add some simple logic to return a wallet’s balance and expose that as a new endpoint in our API. Continuing in <code>core/services.py</code>, declare a new class, <code>ColumbusTokenService</code>, to wrap the blockchain service logic and add a static method called <code>check_balance</code> that accepts a wallet address as input and returns its balance in ETH as output:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">class</span> <span class="token class-name">ColumbusTokenService</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n\n    <span class="token comment"># returns the balance of the wallet in ETH</span>\n    @<span class="token builtin">staticmethod</span>\n    <span class="token keyword">def</span> <span class="token function">check_balance</span><span class="token punctuation">(</span>address<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token comment"># Get account balance in Wei</span>\n        wei_balance <span class="token operator">=</span> web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span>getBalance<span class="token punctuation">(</span>address<span class="token punctuation">)</span>\n\n        <span class="token comment"># Convert the account balance from WEI to ETH</span>\n        eth_balance <span class="token operator">=</span> web3<span class="token punctuation">.</span>fromWei<span class="token punctuation">(</span>wei_balance<span class="token punctuation">,</span> <span class="token string">"ether"</span><span class="token punctuation">)</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"ETH balance: {eth_balance}"</span><span class="token punctuation">)</span>\n\n        <span class="token comment"># return the balance</span>\n        <span class="token keyword">return</span> eth_balance\n</code></pre>\n      </div>\n<p>Ethereum measures <strong>ETH</strong> in <strong>WEI</strong>, which is the smallest unit that it’s divisible by. Therefore, 1 ETH is equal to 1,000,000,000,000,000,000 WEI. Similarly, when working with the ColumbusToken, you’ll find that it’s also divisible by 18 places. Web3 provides a helper for converting Wei to a balance denominated in Ether.</p>\n<blockquote>\n<p><a href="http://ethdocs.org/en/latest/ether.html#denominations">Read more about Ether denominations</a></p>\n</blockquote>\n<p>Next, add a new endpoint to the <code>WalletViewSet</code> to expose this logic via the API. In <code>core/views.py</code>, start by adding four <code>import</code> statements at the top of the file:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> renderers\n<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>decorators <span class="token keyword">import</span> action\n<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>response <span class="token keyword">import</span> Response\n<span class="token keyword">from</span> <span class="token punctuation">.</span>services <span class="token keyword">import</span> ColumbusTokenService\n</code></pre>\n      </div>\n<p>Then, add a new function <code>def</code> to the end of the <code>WalletViewSet</code> class. The entire class is reproduced below for context; you need to add the block starting with <code>@action</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">class</span> <span class="token class-name">WalletViewSet</span><span class="token punctuation">(</span>viewsets<span class="token punctuation">.</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token triple-quoted-string string">"""\n    This viewset automatically provides `list`, `create`, `retrieve`,\n    `update` and `destroy` actions.\n    """</span>\n    queryset <span class="token operator">=</span> Wallet<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>order_by<span class="token punctuation">(</span><span class="token string">\'id\'</span><span class="token punctuation">)</span>\n    serializer_class <span class="token operator">=</span> WalletSerializer\n\n    @action<span class="token punctuation">(</span>detail<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> renderer_classes<span class="token operator">=</span><span class="token punctuation">[</span>renderers<span class="token punctuation">.</span>JSONRenderer<span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token keyword">def</span> <span class="token function">check_balance</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        wallet <span class="token operator">=</span> self<span class="token punctuation">.</span>get_object<span class="token punctuation">(</span><span class="token punctuation">)</span>\n        balance_eth <span class="token operator">=</span> ColumbusTokenService<span class="token punctuation">.</span>check_balance<span class="token punctuation">(</span>wallet<span class="token punctuation">.</span>address<span class="token punctuation">)</span>\n        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>balance_eth<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>You should already have an entry for your wallet added to the DB from Part 1; if not, go to <a href="http://localhost:8000/wallets/">http://localhost:8000/wallets/</a> and use the form to add your wallet with its actual address.</p>\n<p>Once you have the record, use its numeric ID (<em>not</em> its address) to build a URL that calls the <code>check_balance</code> endpoint. For instance, if the ID assigned to your wallet is <code>1</code>, you’d use the following URL:</p>\n<blockquote>\n<p><a href="http://localhost:8000/wallets/1/check_balance">http://localhost:8000/wallets/1/check_balance</a></p>\n</blockquote>\n<p>You should see a small amount returned. The wallet you were provided only has a fractional amount of ETH; that’s ok, as the ColumbusToken only requires a nominal amount.</p>\n<p>Congratulations, you’ve got blockchain connectivity! In Part 2, we’ll dive in to working with the blockchain in a more sophisticated way.</p>',
tableOfContents:'<ul>\n<li><a href="/django-meets-blockchain-site/part-1/instructions/#setup">Setup</a></li>\n<li><a href="/django-meets-blockchain-site/part-1/instructions/#scaffolding">Scaffolding</a></li>\n<li>\n<p><a href="/django-meets-blockchain-site/part-1/instructions/#adding-an-endpoint">Adding an Endpoint</a></p>\n<ul>\n<li><a href="/django-meets-blockchain-site/part-1/instructions/#model">Model</a></li>\n<li><a href="/django-meets-blockchain-site/part-1/instructions/#serializer">Serializer</a></li>\n<li><a href="/django-meets-blockchain-site/part-1/instructions/#viewset">ViewSet</a></li>\n<li><a href="/django-meets-blockchain-site/part-1/instructions/#wiring">Wiring</a></li>\n<li><a href="/django-meets-blockchain-site/part-1/instructions/#add-migrations-and-run-the-server">Add Migrations and Run the Server</a></li>\n<li><a href="/django-meets-blockchain-site/part-1/instructions/#add-validation">Add Validation</a></li>\n</ul>\n</li>\n<li><a href="/django-meets-blockchain-site/part-1/instructions/#hello-blockchain">Hello, Blockchain!</a></li>\n</ul>',excerpt:"Setup Begin by forking the following repository, which contains some assets to get you started: https://github.com/taliotech/django-meets…",frontmatter:{id:"drf-instructions",title:"Instructions",prev:"drf-overview",next:null}}},pathContext:{slug:"/part-1/instructions/"}}}});
//# sourceMappingURL=path---part-1-instructions-3b81a61890bd3bbe275f.js.map