webpackJsonp([85560507404371],{314:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Django Meets Blockchain",sidebarTitle:"Django Meets Blockchain",sidebarSubtext:"Django Meets Blockchain",siteLastUpdated:"2018-11-29T20:25:59.404Z",version:"1.0",siteUrl:"https://taliotech.github.io",keywords:"talio,blockchain,django",author:{name:"Talio.io",url:"https://talio.ai",email:"info@talio.io"},socials:[{name:"Twitter",imgpath:"icon-twitter.svg",url:"TODO"},{name:"GitHub",imgpath:"icon-github.svg",url:"https://github.com/taliotech/django-meets-blockchain-site"},{name:"LinkedIn",imgpath:"icon-linkedin.svg",url:"TODO"},{name:"Medium",imgpath:"icon-medium.svg",url:"TODO"}]}},sectionList:{edges:[{node:{title:"Getting Started",items:[{id:"introduction",slug:"/getting-started/introduction/",title:"Introduction"},{id:"prerequisites",slug:"/getting-started/prerequisites/",title:"Prerequisites"}]}},{node:{title:"Part 1: Fundamentals",items:[{id:"drf-overview",slug:"/part-1/overview/",title:"Overview"},{id:"drf-instructions",slug:"/part-1/instructions/",title:"Instructions"}]}},{node:{title:"Part 2: Blockchain",items:[{id:"blockchain-overview",slug:"/part-2/overview/",title:"Overview"},{id:"blockchain-instructions",slug:"/part-2/instructions/",title:"Instructions"}]}}]},markdownRemark:{html:'<h3 id="objectives"><a href="#objectives" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Objectives</h3>\n<p>In <strong>Part 1</strong>, we created a simple DRF API with a single endpoint to persist and query wallet data. In this part, we’ll extend the API to actually do some real work:</p>\n<ul>\n<li>Connect to the Ethereum mainnet using Web3.py</li>\n<li>Access a pre-deployed smart contract</li>\n<li>Execute a transaction to capture a Columbus token using a live wallet</li>\n</ul>\n<h3 id="setup"><a href="#setup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setup</h3>\n<p>Before you begin, you’ll need to access your <a href="https://infura.io">infura.io</a> account — or sign up for one if you didn’t already.</p>\n<p>In Infura, create a new project. Any name for the project will work; in the example screenshot below, we used <code class="language-text">COLUMBUSTOKEN</code>.</p>\n<p>Once you’ve created a project, the first thing you’ll need to do is whitelist the address of the smart contract. The address to use is:</p>\n<blockquote>\n<p><code class="language-text">0x07c344edD719A356775E1FBd852c63Dc46167B76</code></p>\n</blockquote>\n<p>Simply add the above to the project whitelist.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; margin-top: 1.5rem; margin-bottom: 1.5rem; max-width: 720px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 54.78018143754362%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABnUlEQVQoz42RuUoEQRCG55kEETEQBVNdTMRjwUB8C0ORBTFaUNHdRMHA4zWMBQMT8QjUnRnn6u7p6bl+q1pHFlkWC77porrq76oax1+ZRLg6ZUk3pmHa08DmzFg8qnlZnsAj4a5R/vbcN1uzcMR1D4OLQzyfdeFdHCG5PEF60x9LdHWK8KqHt/MuHrq7eDnu4OlwD2/9AzgSwHsk8ZFIvAYR/CyHopgcg6hh7fbuHgutZSyttzG/2MJOZx+OUQpxJqCUhEoSpFKgMBnK3KA0Y6D7IsugqU5LCSEE1UoS1BncXCBWAsFngCiOUJYl6rq2/LUmPnzPX1PVyIsSjs40UiERBgHSNEVGr9qTuiiKAlEUIY5jSxiGNjYsWFWVjXF3OdU4LJDQqJ7nwfd9C7ev6dIQkhLlz0iMohUx/CifeZ5b0YQmNeT/CrKQ67oYDAY20QpSgtbaFjONPyzK3bEpGteQ73ASX7JoMy6PqckftcNR1uTx7m2HLMCdsSj7Lvky1aiapQ//gBE/pTEr2IzCwnwy5sfn/fBI/4HFeOdf7AUptCVNlpsAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="infura-io-screenshot"\n        title=""\n        src="/django-meets-blockchain-site/static/infura-230042179ea61e174a220c9ce0dcb42e-2cd32.png"\n        srcset="/django-meets-blockchain-site/static/infura-230042179ea61e174a220c9ce0dcb42e-a911d.png 180w,\n/django-meets-blockchain-site/static/infura-230042179ea61e174a220c9ce0dcb42e-90a67.png 360w,\n/django-meets-blockchain-site/static/infura-230042179ea61e174a220c9ce0dcb42e-2cd32.png 720w,\n/django-meets-blockchain-site/static/infura-230042179ea61e174a220c9ce0dcb42e-c1214.png 1080w,\n/django-meets-blockchain-site/static/infura-230042179ea61e174a220c9ce0dcb42e-4883d.png 1433w"\n        sizes="(max-width: 720px) 100vw, 720px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Next, create a new file to contain the logic for accessing the token: <code class="language-text">django-meets-blockchain-api/core/columbustoken.py</code></p>\n<p>At the top of the file, you’ll need a few <code class="language-text">import</code> statements:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">import</span> json\n<span class="token keyword">import</span> os\n<span class="token keyword">from</span> web3 <span class="token keyword">import</span> Web3 <span class="token comment"># web3 installed via vagrant, alt: `pip install web3`</span></code></pre>\n      </div>\n<blockquote>\n<p>TODO: logging</p>\n</blockquote>\n<p>Next, you’ll need to grab the endpoint URL from your infura.io project page. The URL will have the following form:</p>\n<blockquote>\n<p><code class="language-text">https://mainnet.infura.io/v3/&lt;INFURA_PROJECT_ID&gt;</code></p>\n</blockquote>\n<p><code class="language-text">&lt;INFURA_PROJECT_ID&gt;</code> will be specific to your account, so copy the URL from the infura.io project page and declare it as a field in the code, then use that field to instantiate the Web3 class:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># Endpoint URL from</span>\nPROVIDER_ENDPOINT <span class="token operator">=</span> <span class="token string">"https://mainnet.infura.io/v3/&lt;INFURA_PROJECT_ID>"</span>\n\n<span class="token comment"># Instantiate the Web3 class using the custom endpoint</span>\nweb3 <span class="token operator">=</span> Web3<span class="token punctuation">(</span>Web3<span class="token punctuation">.</span>HTTPProvider<span class="token punctuation">(</span>PROVIDER_ENDPOINT<span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h3 id="accessing-the-wallet"><a href="#accessing-the-wallet" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Accessing the Wallet</h3>\n<blockquote>\n<p>TODO: private key source</p>\n</blockquote>\n<p>First, initialize the account using the private key. The private key can also be used to derive the public address of the wallet.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># Use web3.eth.account library to derive the public address from the key.</span>\n<span class="token comment">#</span>\n<span class="token comment"># https://web3py.readthedocs.io/en/stable/web3.eth.account.html</span>\nACCOUNT <span class="token operator">=</span> web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span>account<span class="token punctuation">.</span>privateKeyToAccount<span class="token punctuation">(</span>PRIVATE_KEY<span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"Wallet address: {ACCOUNT.address}"</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Now that we have an account, let’s use Web3.py to check the balance.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># Get account balance in Wei</span>\nwei_balance <span class="token operator">=</span> web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span>getBalance<span class="token punctuation">(</span>ACCOUNT<span class="token punctuation">.</span>address<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Ethereum measures <strong>ETH</strong> in <strong>WEI</strong>, which is the smallest unit that it’s divisible by. Therefore, 1 ETH is equal to 1,000,000,000,000,000,000 WEI. Similarly, when working with the ColumbusToken, you’ll find that it’s also divisible by 18 places.</p>\n<blockquote>\n<p><a href="http://ethdocs.org/en/latest/ether.html#denominations">Read more about Ether denominations</a></p>\n</blockquote>\n<p>Web3 provides a helper for converting Wei to a balance denominated in Ether:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># Convert the account balance from ETH to WEI</span>\neth_balance <span class="token operator">=</span> web3<span class="token punctuation">.</span>fromWei<span class="token punctuation">(</span>wei_balance<span class="token punctuation">,</span> <span class="token string">"ether"</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"ETH balance: {eth_balance}"</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>You’ll notice the wallet you were provided only has a fractional amount of ETH; that’s ok, as the ColumbusToken only requires a nominal amount.</p>\n<h3 id="working-with-the-smart-contract"><a href="#working-with-the-smart-contract" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Working with the Smart Contract</h3>\n<p>Next, you’ll need to initialize the Columbus Token smart contract.</p>\n<p>First, declare the address of the deployed ERC-20 contract in the code. This is the same address you whitelisted in the first step, but in this case, it will need to be converted to a checksum address:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># Web3 1.0.0+ requires that we parse the address to a checksum address.</span>\nCONTRACT_ADDRESS <span class="token operator">=</span> Web3<span class="token punctuation">.</span>toChecksumAddress<span class="token punctuation">(</span><span class="token string">\'0x07c344edd719a356775e1fbd852c63dc46167b76\'</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>You’ll need the JSON for contract’s application binary interface (ABI), which is available at the following URL:</p>\n<blockquote>\n<p><a href="https://etherscan.io/address/0x07c344edd719a356775e1fbd852c63dc46167b76#code">https://etherscan.io/address/0x07c344edd719a356775e1fbd852c63dc46167b76#code</a></p>\n</blockquote>\n<p>Open the above URL in a browser, scroll down to the <strong>Contract ABI</strong> section, then click <strong>Export ABI</strong> and choose <strong>JSON Format</strong>. Save the JSON to <code class="language-text">django-meets-blockchain-api/core/ColumbusTokenAbi.json</code>.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; margin-top: 1.5rem; margin-bottom: 1.5rem; max-width: 720px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 35.47486033519554%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABA0lEQVQoz11SN27EQBDT/z9l+BqHM3ClrBwLRShLhQK9HGMOhguCO2HJ0aysbdvQNA2qqsI8z7iuC/u+4zxPHMchZ4Jngnk3inD7vOPt8cDt/oWX9w+8mvg7DGGN44gkSRDHsXCe58KKNE2fYA/rfhAgyzJUdY2iLFEaLOuK3RhaXdchMA2u6yI0Dr7vS+w4jrDnecKskfUcmSn/YxgGWH3fiwin4WUKs8iLMo2pcTrmVIiTap8aMuZwT0E2EXqRImxUdzVVIfbyK/SruIJlWX4FtUBmkbBtW1hzZIqRWVMT5ggaTNMEazXL5AsXRSHLbdtWmLG+/l8mavMYCs1zf/xjfgBa3QCOIDBjNgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="etherscan-io-screenshot"\n        title=""\n        src="/django-meets-blockchain-site/static/etherscan-88f1f6eb76868739e7d21abe4a3ecd66-2cd32.png"\n        srcset="/django-meets-blockchain-site/static/etherscan-88f1f6eb76868739e7d21abe4a3ecd66-a911d.png 180w,\n/django-meets-blockchain-site/static/etherscan-88f1f6eb76868739e7d21abe4a3ecd66-90a67.png 360w,\n/django-meets-blockchain-site/static/etherscan-88f1f6eb76868739e7d21abe4a3ecd66-2cd32.png 720w,\n/django-meets-blockchain-site/static/etherscan-88f1f6eb76868739e7d21abe4a3ecd66-8f8fa.png 1074w"\n        sizes="(max-width: 720px) 100vw, 720px"\n      />\n    </span>\n  </span>\n  </p>\n<p>After saving the JSON file, back in the code, load it from the filesystem:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">CONTRACT_ABI <span class="token operator">=</span> <span class="token string">""</span>\n<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>__file__<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'ColumbusTokenAbi.json\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">as</span> json_data<span class="token punctuation">:</span>\n    abi_json <span class="token operator">=</span> json<span class="token punctuation">.</span>load<span class="token punctuation">(</span>json_data<span class="token punctuation">)</span>\n    <span class="token comment"># The provided abi was taken from etherscan, which has some extra stuff in it.</span>\n    <span class="token comment"># We just want the \'result\' for creating a contract object.</span>\n    CONTRACT_ABI <span class="token operator">=</span> abi_json<span class="token punctuation">[</span><span class="token string">\'result\'</span><span class="token punctuation">]</span></code></pre>\n      </div>\n<p>Now you can instantiate a Web3 <code class="language-text">Contract</code> object for working with the contract:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">columbusTokenContract <span class="token operator">=</span> web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span>contract<span class="token punctuation">(</span>\n    address<span class="token operator">=</span>CONTRACT_ADDRESS<span class="token punctuation">,</span>\n    abi<span class="token operator">=</span>CONTRACT_ABI\n    <span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Great! Now that we have a contract object we can work with, let’s get some data from the blockchain!</p>\n<p>Let’s make sure we’re working with the ColumbusToken by making some calls to the contract. The following are “view” functions and can be called for free. All of the readable functions on this contract <a href="https://etherscan.io/address/0x07c344edd719a356775e1fbd852c63dc46167b76#readContract">can be found online</a>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># Query the contract name</span>\ncontract_name <span class="token operator">=</span> columbusTokenContract<span class="token punctuation">.</span>functions<span class="token punctuation">.</span>name<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>call<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"Contract Name: {contract_name}"</span><span class="token punctuation">)</span>\n\n<span class="token comment"># Query the contract symbol</span>\ncontract_symbol <span class="token operator">=</span> columbusTokenContract<span class="token punctuation">.</span>functions<span class="token punctuation">.</span>symbol<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>call<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"Contract Symbol: {contract_symbol}"</span><span class="token punctuation">)</span>\n\n<span class="token comment"># Query the contract\'s total supply</span>\ncontract_totalSupply <span class="token operator">=</span> columbusTokenContract<span class="token punctuation">.</span>functions<span class="token punctuation">.</span>totalSupply<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>call<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"Contract totalSupply: {contract_totalSupply}"</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>You can also use the contract to check the token balance on the input account by passing it as a parameter:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># Check the CBUS token balance of the account</span>\ntoken_balance <span class="token operator">=</span> columbusTokenContract<span class="token punctuation">.</span>functions<span class="token punctuation">.</span>balanceOf<span class="token punctuation">(</span>ACCOUNT<span class="token punctuation">.</span>address<span class="token punctuation">)</span><span class="token punctuation">.</span>call<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"My CBUS balance: {token_balance}"</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h3 id="preparing-the-transaction"><a href="#preparing-the-transaction" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Preparing the Transaction</h3>\n<p>Functions that only read data from the blockchain can be invoked with the <code class="language-text">.call()</code> function; functions that will modify the blockchain state will need to be prepared as <strong>transactions</strong>. In order to request a token from the contract and send it to the input wallet, we’ll need a raw transaction.</p>\n<p>First, you’ll want to set some transaction variables.</p>\n<p>Declare a <strong>maximum gas</strong> variable to set the maximum amount of gas to be used in the transaction. This generally prevents your costs from unexpectedly getting out of control by killing the transaction when the gas limit is exceeded. For the ColumbusToken, invoking the <code class="language-text">getToken()</code> method should cost around 69,476 gas, so set a <code class="language-text">maximum_gas</code> variable using a value that’s just a little more than that.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># 100K should cover the Columbus Token, which only costs 69476 gas</span>\nmaximum_gas <span class="token operator">=</span> <span class="token number">100000</span></code></pre>\n      </div>\n<p>A <strong>nonce</strong> value is required for each transaction. It prevents duplicate transactions from being processed by the network and ensures that transactions are processed in the intended order. The nonce is zero-indexed and should be equal to the number of transactions sent by the account. You can use web3’s <code class="language-text">getTransactionCount(address)</code> function to get the nonce value for a transaction.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># check the nonce value for the account</span>\nnonce <span class="token operator">=</span> web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span>getTransactionCount<span class="token punctuation">(</span>ACCOUNT<span class="token punctuation">.</span>address<span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"nonce: {nonce}"</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>The <strong>chain ID</strong> is the ID of the network we are deploying to. Examples of network IDs:</p>\n<ul>\n<li>1: Ethereum Mainnet</li>\n<li>3: Ropsten Testnet</li>\n<li>4: Rinkeby Testnet</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># The web3 call returns the value as a string, but we will need an integer to create a transaction.</span>\nchain_id <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>web3<span class="token punctuation">.</span>version<span class="token punctuation">.</span>network<span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"Chain ID: {chain_id}"</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p><strong>Gas price</strong> is defined programatically in wei, but it’s typically discussed in GWEI. Luckily, Web3 provides us a method to quickly convert GWEI to WEI.</p>\n<blockquote>\n<p>Users may want to check <a href="https://ethgasstation.info/">https://ethgasstation.info/</a> prior to sending a transaction to ensure that they don’t set too high or low a price.</p>\n</blockquote>\n<ul>\n<li>A gas price that’s too high can incur needless expense.</li>\n<li>A price that’s too low will mean that your transaction takes longer to process, and if it’s very low it may never get processed at all.</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">gas_price <span class="token operator">=</span> web3<span class="token punctuation">.</span>toWei<span class="token punctuation">(</span><span class="token string">\'10\'</span><span class="token punctuation">,</span> <span class="token string">\'gwei\'</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"Gas Price: {gas_price} wei"</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Now you’re ready to build the transaction to request a Columbus Token. First, you’ll need to build a raw transaction containing the data to be transmitted:</p>\n<blockquote>\n<p>Reference docs: <a href="https://web3py.readthedocs.io/en/stable/contracts.html#web3.contract.ContractFunction.buildTransaction">web3.contract.ContractFunction.buildTransaction</a></p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># Build the raw transaction</span>\nraw_transaction <span class="token operator">=</span> columbusTokenContract<span class="token punctuation">.</span>functions<span class="token punctuation">.</span>getToken<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>buildTransaction<span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token string">\'chainId\'</span><span class="token punctuation">:</span> chain_id<span class="token punctuation">,</span>\n    <span class="token string">\'gas\'</span><span class="token punctuation">:</span> maximum_gas<span class="token punctuation">,</span>\n    <span class="token string">\'gasPrice\'</span><span class="token punctuation">:</span> gas_price<span class="token punctuation">,</span>\n    <span class="token string">\'nonce\'</span><span class="token punctuation">:</span> nonce\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"Raw Transaction: {raw_transaction}\\n"</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Next, you’ll need to cryptographically sign the transaction with the account’s private key.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># Sign the raw transaction using the private key via the web3 acount object</span>\nsigned_transaction <span class="token operator">=</span> ACCOUNT<span class="token punctuation">.</span>signTransaction<span class="token punctuation">(</span>raw_transaction<span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"Signed Transaction: {signed_transaction}\\n"</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<blockquote>\n<p>The ColumbusToken contract contains a unique (and nonstandard) feature that allows an account to claim one CBUS token once upon request. This can actually be abused pretty easily, so it’s just a fun way to demonstrate interacting with a smart contract. See <a href="https://etherscan.io/address/0x07c344edd719a356775e1fbd852c63dc46167b76#code">line 57 of the contract’s code</a> to see how this is implemented.</p>\n</blockquote>\n<h3 id="capture-the-token"><a href="#capture-the-token" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Capture the Token</h3>\n<p>Your signed transaction now contains everything it needs to be processed by the network. To get your CBUS Token, add the following line (ensure that there is some ether in your account!):</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">transaction_hash <span class="token operator">=</span> web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span>sendRawTransaction<span class="token punctuation">(</span>signed_transaction<span class="token punctuation">.</span>rawTransaction<span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"Transaction Hash: {transaction_hash}\\n"</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<blockquote>\n<p>TODO: store tx hash?\nTODO: Once the transaction has processed, go back and check your CBUS token balance.</p>\n</blockquote>',tableOfContents:'<ul>\n<li><a href="/django-meets-blockchain-site/part-2/instructions/#objectives">Objectives</a></li>\n<li><a href="/django-meets-blockchain-site/part-2/instructions/#setup">Setup</a></li>\n<li><a href="/django-meets-blockchain-site/part-2/instructions/#accessing-the-wallet">Accessing the Wallet</a></li>\n<li><a href="/django-meets-blockchain-site/part-2/instructions/#working-with-the-smart-contract">Working with the Smart Contract</a></li>\n<li><a href="/django-meets-blockchain-site/part-2/instructions/#preparing-the-transaction">Preparing the Transaction</a></li>\n<li><a href="/django-meets-blockchain-site/part-2/instructions/#capture-the-token">Capture the Token</a></li>\n</ul>',excerpt:"Objectives In  Part 1 , we created a simple DRF API with a single endpoint to persist and query wallet data. In this part, we’ll extend the…",frontmatter:{id:"blockchain-instructions",title:"Instructions",prev:"blockchain-overview",next:null}}},pathContext:{slug:"/part-2/instructions/"}}}});
//# sourceMappingURL=path---part-2-instructions-ff6aebc7f76263c3327f.js.map