webpackJsonp([85560507404371],{338:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Django Meets Blockchain",sidebarTitle:"Django Meets Blockchain",sidebarSubtext:"Django Meets Blockchain",siteLastUpdated:"2018-12-12T16:59:29.333Z",version:"1.0",siteUrl:"https://taliotech.github.io/django-meets-blockchain-site",keywords:"talio,blockchain,django",author:{name:"Talio.io",url:"https://talio.ai",email:"info@talio.io"},socials:[{name:"Twitter",imgpath:"icon-twitter.svg",url:"TODO"},{name:"GitHub",imgpath:"icon-github.svg",url:"https://github.com/taliotech/django-meets-blockchain-site"},{name:"LinkedIn",imgpath:"icon-linkedin.svg",url:"TODO"},{name:"Medium",imgpath:"icon-medium.svg",url:"TODO"}]}},sectionList:{edges:[{node:{title:"Getting Started",items:[{id:"introduction",slug:"/getting-started/introduction/",title:"Introduction"},{id:"prerequisites",slug:"/getting-started/prerequisites/",title:"Prerequisites"}]}},{node:{title:"Part 1: Fundamentals",items:[{id:"drf-overview",slug:"/part-1/overview/",title:"Overview"},{id:"drf-instructions",slug:"/part-1/instructions/",title:"Instructions"}]}},{node:{title:"Part 2: Blockchain",items:[{id:"blockchain-overview",slug:"/part-2/overview/",title:"Overview"},{id:"blockchain-instructions",slug:"/part-2/instructions/",title:"Instructions"}]}}]},markdownRemark:{html:'<h3 id="checking-the-cbus-token-balance"><a href="#checking-the-cbus-token-balance" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Checking the CBUS Token Balance</h3>\n<p>Since we eventually want to capture the Columbus Token to the wallet, let’s start by adding a new endpoint within <code>/wallets</code> that checks whether or not the wallet has the token already. While it is possible that a wallet could have more than one token, or even a fractional amount of tokens (by way of trading them with others), since the Columbus Token smart contract only allows a wallet to request a single token, the CBUS token balance will generally be either 0 or 1.</p>\n<p>This endpoint will essentially be a variation of the <code>check_balance</code> endpoint you made in Part 1; let’s call this one <code>check_token_balance</code>.</p>\n<p>Open <code>core/services.py</code> to start coding the implementation. Before you start to code the endpoint implementation function itself, you’ll need to declare some data about the CBUS token smart contract using Web3 — but since you’ll need this same logic for a later step, you’ll want to add the following code to the <em>header</em> area of <code>core/services.py</code> — in other words, the part of the module <em>before</em> the <code>class ColumbusTokenService</code> declaration, just after where you declared the infura.io endpoint and initialized the Web3 module in Part 1.</p>\n<p>First, declare the address of the deployed ERC-20 contract in the code. This is the same address you whitelisted on infura.io, but in this case, it will need to be converted to a checksum address:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">    <span class="token comment"># Web3 1.0.0+ requires that we parse the address to a checksum address.</span>\n    CONTRACT_ADDRESS <span class="token operator">=</span> Web3<span class="token punctuation">.</span>toChecksumAddress<span class="token punctuation">(</span><span class="token string">\'0x07c344edd719a356775e1fbd852c63dc46167b76\'</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>You’ll need the JSON for contract’s application binary interface (ABI), which is available at the following URL:</p>\n<blockquote>\n<p><a href="https://etherscan.io/address/0x07c344edd719a356775e1fbd852c63dc46167b76#code">https://etherscan.io/address/0x07c344edd719a356775e1fbd852c63dc46167b76#code</a></p>\n</blockquote>\n<p>Open the above URL in a browser, scroll down to the <strong>Contract ABI</strong> section, then click <strong>Export ABI</strong> and choose <strong>JSON Format</strong>. Save the JSON to <code>core/ColumbusTokenABI.json</code>.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; margin-top: 1.5rem; margin-bottom: 1.5rem; max-width: 720px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 35.47486033519554%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABA0lEQVQoz11SN27EQBDT/z9l+BqHM3ClrBwLRShLhQK9HGMOhguCO2HJ0aysbdvQNA2qqsI8z7iuC/u+4zxPHMchZ4Jngnk3inD7vOPt8cDt/oWX9w+8mvg7DGGN44gkSRDHsXCe58KKNE2fYA/rfhAgyzJUdY2iLFEaLOuK3RhaXdchMA2u6yI0Dr7vS+w4jrDnecKskfUcmSn/YxgGWH3fiwin4WUKs8iLMo2pcTrmVIiTap8aMuZwT0E2EXqRImxUdzVVIfbyK/SruIJlWX4FtUBmkbBtW1hzZIqRWVMT5ggaTNMEazXL5AsXRSHLbdtWmLG+/l8mavMYCs1zf/xjfgBa3QCOIDBjNgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="etherscan-io-screenshot"\n        title=""\n        src="/django-meets-blockchain-site/static/etherscan-88f1f6eb76868739e7d21abe4a3ecd66-2cd32.png"\n        srcset="/django-meets-blockchain-site/static/etherscan-88f1f6eb76868739e7d21abe4a3ecd66-a911d.png 180w,\n/django-meets-blockchain-site/static/etherscan-88f1f6eb76868739e7d21abe4a3ecd66-90a67.png 360w,\n/django-meets-blockchain-site/static/etherscan-88f1f6eb76868739e7d21abe4a3ecd66-2cd32.png 720w,\n/django-meets-blockchain-site/static/etherscan-88f1f6eb76868739e7d21abe4a3ecd66-8f8fa.png 1074w"\n        sizes="(max-width: 720px) 100vw, 720px"\n      />\n    </span>\n  </span>\n  </p>\n<p>After saving the JSON file, back in the code, load it from the filesystem:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">    CONTRACT_ABI <span class="token operator">=</span> <span class="token string">""</span>\n    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>__file__<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'ColumbusTokenABI.json\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">as</span> json_data<span class="token punctuation">:</span>\n        abi_json <span class="token operator">=</span> json<span class="token punctuation">.</span>load<span class="token punctuation">(</span>json_data<span class="token punctuation">)</span>\n        <span class="token comment"># The provided abi was taken from etherscan, which has some extra stuff in it.</span>\n        <span class="token comment"># We just want the \'result\' for creating a contract object.</span>\n        CONTRACT_ABI <span class="token operator">=</span> abi_json<span class="token punctuation">[</span><span class="token string">\'result\'</span><span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>Now you can instantiate a Web3 <code>Contract</code> object for working with the contract:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">    columbusTokenContract <span class="token operator">=</span> web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span>contract<span class="token punctuation">(</span>\n        address<span class="token operator">=</span>CONTRACT_ADDRESS<span class="token punctuation">,</span>\n        abi<span class="token operator">=</span>CONTRACT_ABI\n    <span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Great! Now that we have a contract object we can work with, let’s add the actual endpoint implementation. This part of the code should go <em>within</em> the <code>ColumbusTokenService</code> class body, just like the <code>check_balance</code> endpoint:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">  <span class="token comment"># returns the number of CBUS tokens in the wallet</span>\n  @<span class="token builtin">staticmethod</span>\n  <span class="token keyword">def</span> <span class="token function">check_token_balance</span><span class="token punctuation">(</span>address<span class="token punctuation">)</span><span class="token punctuation">:</span>\n</code></pre>\n      </div>\n<p>Before we grab the token balance, let’s use this opportunity to make sure we’re working with the ColumbusToken by making some calls to the contract itself. The following are “view” functions and can be called for free. All of the readable functions on this contract <a href="https://etherscan.io/address/0x07c344edd719a356775e1fbd852c63dc46167b76#readContract">can be found online</a>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">      <span class="token comment"># Query the contract name</span>\n      contract_name <span class="token operator">=</span> columbusTokenContract<span class="token punctuation">.</span>functions<span class="token punctuation">.</span>name<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>call<span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"Contract Name: {contract_name}"</span><span class="token punctuation">)</span>\n\n      <span class="token comment"># Query the contract symbol</span>\n      contract_symbol <span class="token operator">=</span> columbusTokenContract<span class="token punctuation">.</span>functions<span class="token punctuation">.</span>symbol<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>call<span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"Contract Symbol: {contract_symbol}"</span><span class="token punctuation">)</span>\n\n      <span class="token comment"># Query the contract\'s total supply</span>\n      contract_totalSupply <span class="token operator">=</span> columbusTokenContract<span class="token punctuation">.</span>functions<span class="token punctuation">.</span>totalSupply<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>call<span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"Contract totalSupply: {contract_totalSupply}"</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>In the same manner, you can use the contract to check the token balance on the wallet, and return that value:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">      <span class="token comment"># Check the CBUS token balance of the account</span>\n      token_balance <span class="token operator">=</span> columbusTokenContract<span class="token punctuation">.</span>functions<span class="token punctuation">.</span>balanceOf<span class="token punctuation">(</span>address<span class="token punctuation">)</span><span class="token punctuation">.</span>call<span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"CBUS token balance: {token_balance}"</span><span class="token punctuation">)</span>\n      <span class="token keyword">return</span> token_balance\n</code></pre>\n      </div>\n<p>Great. Now, in <code>core/views.py</code>, expose this as an endpoint the same way you did in the last part:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">  @action<span class="token punctuation">(</span>detail<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> renderer_classes<span class="token operator">=</span><span class="token punctuation">[</span>renderers<span class="token punctuation">.</span>JSONRenderer<span class="token punctuation">]</span><span class="token punctuation">)</span>\n  <span class="token keyword">def</span> <span class="token function">check_token_balance</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>\n      wallet <span class="token operator">=</span> self<span class="token punctuation">.</span>get_object<span class="token punctuation">(</span><span class="token punctuation">)</span>\n      token_balance <span class="token operator">=</span> ColumbusTokenService<span class="token punctuation">.</span>check_token_balance<span class="token punctuation">(</span>wallet<span class="token punctuation">.</span>address<span class="token punctuation">)</span>\n      <span class="token keyword">return</span> Response<span class="token punctuation">(</span>token_balance<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Test this endpoint by opening its URL (remember to substitute the numeric ID of your wallet in the URL below if other than <code>1</code>):</p>\n<blockquote>\n<p><a href="http://localhost:8000/wallets/1/check_token_balance">http://localhost:8000/wallets/1/check<em>token</em>balance</a></p>\n</blockquote>\n<p>The balance should be zero, which make sense, as you haven’t captured the token yet.</p>\n<h3 id="preparing-the-transaction"><a href="#preparing-the-transaction" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Preparing the Transaction</h3>\n<p>Up until now, all our blockchain logic has been read-only. Time to get our hands dirty!</p>\n<p>First, you’ll need to add another endpoint with some more complex logic: creating the transaction that will invoke the smart contract to send the ColumbusToken to the wallet. This endpoint will take care of all the logic right up until the transaction needs to be signed and executed.</p>\n<p>In <code>core/services.py</code>, add a second function after <code>check_balance</code> called <code>prepare_transaction</code>. This function will also take the wallet’s address as input:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">    @<span class="token builtin">staticmethod</span>\n    <span class="token keyword">def</span> <span class="token function">prepare_transaction</span><span class="token punctuation">(</span>address<span class="token punctuation">)</span><span class="token punctuation">:</span>\n</code></pre>\n      </div>\n<p>Functions that only read data from the blockchain, like those used in the previous endpoints, can be invoked with the <code>.call()</code> function; functions that will modify the blockchain state will need to be prepared as <strong>transactions</strong>. In order to request a token from the contract and send it to the input wallet, we’ll need a raw transaction.</p>\n<p>First, you’ll want to set some transaction variables.</p>\n<p>Declare a <strong>maximum gas</strong> variable to set the maximum amount of gas to be used in the transaction. This generally prevents your costs from unexpectedly getting out of control by killing the transaction when the gas limit is exceeded. For the ColumbusToken, invoking the <code>getToken()</code> method should cost around 69,476 gas, so set a <code>maximum_gas</code> variable using a value that’s just a little more than that.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">      <span class="token comment"># 100K should cover the Columbus Token, which only costs 69476 gas</span>\n      maximum_gas <span class="token operator">=</span> <span class="token number">100000</span>\n</code></pre>\n      </div>\n<p>A <strong>nonce</strong> value is required for each transaction. It prevents duplicate transactions from being processed by the network and ensures that transactions are processed in the intended order. The nonce is zero-indexed and should be equal to the number of transactions sent by the account. You can use web3’s <code>getTransactionCount(address)</code> function to get the nonce value for a transaction.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">      <span class="token comment"># check the nonce value for the account</span>\n      nonce <span class="token operator">=</span> web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span>getTransactionCount<span class="token punctuation">(</span>ACCOUNT<span class="token punctuation">.</span>address<span class="token punctuation">)</span>\n      <span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"nonce: {nonce}"</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>The <strong>chain ID</strong> is the ID of the network we are deploying to. Examples of network IDs:</p>\n<ul>\n<li>1: Ethereum Mainnet</li>\n<li>3: Ropsten Testnet</li>\n<li>4: Rinkeby Testnet</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">      <span class="token comment"># The web3 call returns the value as a string, but we will need an integer to create a transaction.</span>\n      chain_id <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>web3<span class="token punctuation">.</span>version<span class="token punctuation">.</span>network<span class="token punctuation">)</span>\n      <span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"Chain ID: {chain_id}"</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p><strong>Gas price</strong> is defined programmatically in WEI, but it’s typically discussed in GWEI. Luckily, Web3 provides us a method to quickly convert GWEI to WEI.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">      gas_price <span class="token operator">=</span> web3<span class="token punctuation">.</span>toWei<span class="token punctuation">(</span><span class="token string">\'10\'</span><span class="token punctuation">,</span> <span class="token string">\'gwei\'</span><span class="token punctuation">)</span>\n      <span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"Gas Price: {gas_price} wei"</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>Users may want to check <a href="https://ethgasstation.info/">https://ethgasstation.info/</a> prior to sending a transaction to ensure that they don’t set too high or low a price.</p>\n</blockquote>\n<ul>\n<li>A gas price that’s too high can incur needless expense.</li>\n<li>A price that’s too low will mean that your transaction takes longer to process, and if it’s very low it may never get processed at all.</li>\n</ul>\n<p>Now you’re ready to build the transaction to request a Columbus Token. First, you’ll need to build a raw transaction containing the data to be transmitted:</p>\n<blockquote>\n<p>Reference docs: <a href="https://web3py.readthedocs.io/en/stable/contracts.html#web3.contract.ContractFunction.buildTransaction">web3.contract.ContractFunction.buildTransaction</a></p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">      <span class="token comment"># Build the raw transaction</span>\n      raw_transaction <span class="token operator">=</span> columbusTokenContract<span class="token punctuation">.</span>functions<span class="token punctuation">.</span>getToken<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>buildTransaction<span class="token punctuation">(</span><span class="token punctuation">{</span>\n          <span class="token string">\'chainId\'</span><span class="token punctuation">:</span> chain_id<span class="token punctuation">,</span>\n          <span class="token string">\'gas\'</span><span class="token punctuation">:</span> maximum_gas<span class="token punctuation">,</span>\n          <span class="token string">\'gasPrice\'</span><span class="token punctuation">:</span> gas_price<span class="token punctuation">,</span>\n          <span class="token string">\'nonce\'</span><span class="token punctuation">:</span> nonce\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"Raw Transaction: {raw_transaction}\\n"</span><span class="token punctuation">)</span>\n      <span class="token comment"># return the transaction JSON</span>\n      <span class="token keyword">return</span> raw_transaction\n</code></pre>\n      </div>\n<p>Finally, open up <code>core/views.py</code> again to expose <code>prepare_transaction</code> as a new endpoint in <code>/wallets</code>, just as you did with <code>check_balance</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">  @action<span class="token punctuation">(</span>detail<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> renderer_classes<span class="token operator">=</span><span class="token punctuation">[</span>renderers<span class="token punctuation">.</span>JSONRenderer<span class="token punctuation">]</span><span class="token punctuation">)</span>\n  <span class="token keyword">def</span> <span class="token function">prepare_transaction</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>\n      wallet <span class="token operator">=</span> self<span class="token punctuation">.</span>get_object<span class="token punctuation">(</span><span class="token punctuation">)</span>\n      raw_transaction <span class="token operator">=</span> ColumbusTokenService<span class="token punctuation">.</span>prepare_transaction<span class="token punctuation">(</span>wallet<span class="token punctuation">.</span>address<span class="token punctuation">)</span>\n      <span class="token keyword">return</span> Response<span class="token punctuation">(</span>raw_transaction<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Now you should be able to access this endpoint by it’s URL to see the JSON of the raw transaction. Again, if the ID of your wallet in the DB is <code>1</code>, the URL in this case would be:</p>\n<blockquote>\n<p><a href="http://localhost:8000/wallets/1/prepare_transaction">http://localhost:8000/wallets/1/prepare_transaction</a></p>\n</blockquote>\n<h3 id="sign-and-execute-the-transaction"><a href="#sign-and-execute-the-transaction" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sign and Execute the Transaction</h3>\n<p>Before the transaction can be executed, it must be signed using the wallet’s private key. As previously discussed, the API won’t have that key, so the raw transaction JSON must be signed on the client side. To do this, you’ll need to make a separate script and execute it outside of the Django server process. For the sake of simplicity, though, you can simply create the script inside the VM so that the same Python stack is available. It will need to interact with the server, though, so be sure to leave the server running.</p>\n<p>On your <strong>host</strong> machine, open a new terminal window and navigate to the folder where you cloned the django-meets-blockchain repo. From that folder, run the same command you did in part one: <code>vagrant ssh</code>. This will create a second SSH connection to the Vagrant VM, so you should have <strong>two</strong> terminal windows open now — one running the Django server and the other showing the command prompt inside the VM (<code>(dmb-api) vagrant@vagrant:~/dmb-api$</code>).</p>\n<p>Create a new file in the root repository folder called <code>client.py</code>. You can do this in your text editor or via the terminal. It will appear alongside some of the other Django files like <code>manage.py</code> but we’ll execute it separate from the DRF server. In the real world, this script would be executed on a different machine, but, again, we’re just using the same environment for convenience.</p>\n<p>The <code>client.py</code> script will also use Web3, so it starts in the same way, with the similar imports and the infura.io endpoint declaration (note you’ll need to replace <code>&#x3C;INFURA_PROJECT_ID></code> with your project ID as before):</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">import</span> json\n<span class="token keyword">from</span> web3 <span class="token keyword">import</span> Web3\n<span class="token keyword">import</span> urllib3 <span class="token comment"># used for interacting with the DRF API</span>\n\n<span class="token comment"># Endpoint URL from infura.io</span>\nPROVIDER_ENDPOINT <span class="token operator">=</span> <span class="token string">"https://mainnet.infura.io/v3/&lt;INFURA_PROJECT_ID>"</span>\n\n<span class="token comment"># Instantiate the Web3 class using the custom endpoint</span>\nweb3 <span class="token operator">=</span> Web3<span class="token punctuation">(</span>Web3<span class="token punctuation">.</span>HTTPProvider<span class="token punctuation">(</span>PROVIDER_ENDPOINT<span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Next, you’ll need to add your private key as a variable; replace <code>&#x3C;YOUR_PRIVATE_KEY></code> in the snippet below with the value. Note <a href="https://web3py.readthedocs.io/en/stable/web3.eth.account.html">there are many better ways to work with a local private key</a>; declaring it as a field in your code is probably the <em>worst</em> way, but this is a demo script and a demo wallet.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># NOT a good practice,</span>\nPRIVATE_KEY <span class="token operator">=</span> <span class="token string">"&lt;YOUR_PRIVATE_KEY>"</span>\n</code></pre>\n      </div>\n<p>First, initialize the account using the private key. The private key can also be used to derive the public address of the wallet.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># Use web3.eth.account library to derive the public address from the key.</span>\n<span class="token comment">#</span>\n<span class="token comment"># https://web3py.readthedocs.io/en/stable/web3.eth.account.html</span>\nACCOUNT <span class="token operator">=</span> web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span>account<span class="token punctuation">.</span>privateKeyToAccount<span class="token punctuation">(</span>PRIVATE_KEY<span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"Wallet address: {ACCOUNT.address}"</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Next, retrieve the raw transaction JSON from the Django server, which will be running at <code>localhost</code>, using the same URL you used at the end of the last step. You’ll need to initialize the <code>urllib3</code> pool, fetch the JSON, and decode it to use it in the script:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># initialize the urllib3 pool manager</span>\nhttp <span class="token operator">=</span> urllib3<span class="token punctuation">.</span>PoolManager<span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token comment"># get and decode the raw transaction json</span>\nraw_transaction_json <span class="token operator">=</span> http<span class="token punctuation">.</span>request<span class="token punctuation">(</span><span class="token string">\'GET\'</span><span class="token punctuation">,</span> <span class="token string">\'http://localhost:8000/wallets/1/prepare_transaction/\'</span><span class="token punctuation">)</span>\nraw_transaction <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>raw_transaction_json<span class="token punctuation">.</span>data<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">\'UTF-8\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"Raw Transaction: {raw_transaction}\\n"</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Try running the script from the command line using the new terminal window:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">python client<span class="token punctuation">.</span>py\n</code></pre>\n      </div>\n<p>You should see the same JSON as at the end of the previous step printed to the console.</p>\n<p>Next, you’ll need to cryptographically sign the transaction with the account object:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># Sign the raw transaction using the private key via the web3 acount object</span>\nsigned_transaction <span class="token operator">=</span> ACCOUNT<span class="token punctuation">.</span>signTransaction<span class="token punctuation">(</span>raw_transaction<span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"Signed Transaction: {signed_transaction}\\n"</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>The ColumbusToken contract contains a unique (and nonstandard) feature that allows an account to claim one CBUS token once upon request. This can actually be abused pretty easily, so it’s just a fun way to demonstrate interacting with a smart contract. See <a href="https://etherscan.io/address/0x07c344edd719a356775e1fbd852c63dc46167b76#code">line 57 of the contract’s code</a> to see how this is implemented.</p>\n</blockquote>\n<p>Your signed transaction now contains everything it needs to be processed by the network. To get your CBUS Token, add the following line:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">transaction_hash <span class="token operator">=</span> web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span>sendRawTransaction<span class="token punctuation">(</span>signed_transaction<span class="token punctuation">.</span>rawTransaction<span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token string">"Transaction Hash: {transaction_hash}\\n"</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>At this point, running the script again using <code>python client.py</code> will execute the transaction and capture the token to the wallet. Keep in mind you can only do this once — subsequent runs will fail as the ColumbusToken can only be captured once per wallet!</p>\n<p>Did you capture the token? Use the <code>check_token_balance</code> endpoint to confirm your wallet now has a token balance of <code>1</code>. If it does, congratulations!</p>',
tableOfContents:'<ul>\n<li><a href="/django-meets-blockchain-site/part-2/instructions/#checking-the-cbus-token-balance">Checking the CBUS Token Balance</a></li>\n<li><a href="/django-meets-blockchain-site/part-2/instructions/#preparing-the-transaction">Preparing the Transaction</a></li>\n<li><a href="/django-meets-blockchain-site/part-2/instructions/#sign-and-execute-the-transaction">Sign and Execute the Transaction</a></li>\n</ul>',excerpt:"Checking the CBUS Token Balance Since we eventually want to capture the Columbus Token to the wallet, let’s start by adding a new endpoint…",frontmatter:{id:"blockchain-instructions",title:"Instructions",prev:"blockchain-overview",next:null}}},pathContext:{slug:"/part-2/instructions/"}}}});
//# sourceMappingURL=path---part-2-instructions-8acc7bd5fb2399c737cf.js.map