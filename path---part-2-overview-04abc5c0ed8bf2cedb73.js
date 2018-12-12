webpackJsonp([54008954241179],{339:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Django Meets Blockchain",sidebarTitle:"Django Meets Blockchain",sidebarSubtext:"Django Meets Blockchain",siteLastUpdated:"2018-12-12T16:57:25.903Z",version:"1.0",siteUrl:"https://taliotech.github.io/django-meets-blockchain-site",keywords:"talio,blockchain,django",author:{name:"Talio.io",url:"https://talio.ai",email:"info@talio.io"},socials:[{name:"Twitter",imgpath:"icon-twitter.svg",url:"TODO"},{name:"GitHub",imgpath:"icon-github.svg",url:"https://github.com/taliotech/django-meets-blockchain-site"},{name:"LinkedIn",imgpath:"icon-linkedin.svg",url:"TODO"},{name:"Medium",imgpath:"icon-medium.svg",url:"TODO"}]}},sectionList:{edges:[{node:{title:"Getting Started",items:[{id:"introduction",slug:"/getting-started/introduction/",title:"Introduction"},{id:"prerequisites",slug:"/getting-started/prerequisites/",title:"Prerequisites"}]}},{node:{title:"Part 1: Fundamentals",items:[{id:"drf-overview",slug:"/part-1/overview/",title:"Overview"},{id:"drf-instructions",slug:"/part-1/instructions/",title:"Instructions"}]}},{node:{title:"Part 2: Blockchain",items:[{id:"blockchain-overview",slug:"/part-2/overview/",title:"Overview"},{id:"blockchain-instructions",slug:"/part-2/instructions/",title:"Instructions"}]}}]},markdownRemark:{html:'<h3 id="objectives"><a href="#objectives" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Objectives</h3>\n<p>In <strong>Part 1</strong>, you created a simple DRF API with a single endpoint to persist wallet data. In <strong>Part 2</strong>, you’ll extend the API to actually do some real work: capturing the Columbus token to a wallet. To do this, you’ll need to implement the following steps:</p>\n<ol>\n<li>Connect to the Ethereum mainnet using Web3.py</li>\n<li>Access a pre-deployed smart contract</li>\n<li>Build a transaction using the contract to capture a Columbus token to a wallet</li>\n<li>Sign the transaction using the wallet’s private key</li>\n<li>Execute the signed transaction</li>\n</ol>\n<p>As you have been given a live wallet and have access to its private key, it would be fairly straightforward to implement these steps in a single python script. However, it doesn’t make sense to do this in the context of an API built to process an arbitrary number of wallets, because that would require not just the wallet’s public address but also its private key to be posted to the API. Even assuming you built the transport security and authentication features necessary to support secure handling of this kind of sensitive information, it’s unlikely many users would be willing to share their private key in this way, as they’d be giving you access to their wallet.</p>\n<p>Instead, you’ll need to implement the steps above in a way that avoids the API relying on access to the wallet’s private key — in other words, everything that <em>doesn’t</em> require the private key will be implemented on the <em>server</em> side. Then, you’ll create a separate <em>client</em> script that interacts with the API and executes in isolation any logic that requires the private key (the signing of the transaction).</p>\n<p>For simplicity, we’ll use the same Python stack and libraries for both client and server, executing both within the Vagrant VM. But the logic will be orchestrated between the two:</p>\n<ul>\n<li>The API registers the wallet by persisting its public address (you did this in Part 1)</li>\n<li>The API connects to the Ethereum mainnet to access the smart contract and build a raw, unsigned transaction for the wallet</li>\n<li>The client script gets the raw transaction from the API and signs it using the private key</li>\n<li>The client script executes the signed transaction</li>\n</ul>',tableOfContents:'<ul>\n<li><a href="/django-meets-blockchain-site/part-2/overview/#objectives">Objectives</a></li>\n</ul>',excerpt:"Objectives In  Part 1 , you created a simple DRF API with a single endpoint to persist wallet data. In  Part 2 , you’ll extend the API to…",frontmatter:{id:"blockchain-overview",title:"Overview",prev:"drf-instructions",next:"blockchain-instructions"}}},pathContext:{slug:"/part-2/overview/"}}}});
//# sourceMappingURL=path---part-2-overview-04abc5c0ed8bf2cedb73.js.map