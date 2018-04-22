webpackJsonp([0xcca08df713f4],{345:function(e,o){e.exports={pathContext:{posts:[{html:'<h1>Deploy code to embedded device with Git</h1>\n<p>Connect to your device and create directory for bare repository.</p>\n<pre><code>ssh pi@raspberry.local\nmkdir -p mycode.git &#x26;&#x26; cd $_\n</code></pre>\n<p>Create Bare repository. </p>\n<pre><code>git init --bare\n</code></pre>\n<blockquote>\n<p><strong>Bare repository</strong> is one without the copy of code but only with its versions (history of changes/commits)</p>\n</blockquote>\n<p>Go into hooks directory and create a hook script file. </p>\n<pre><code>cd hooks\ntouch post-receive\n</code></pre>\n<p>In the <code>post-receive</code> write the following: </p>\n<pre><code>#!/bin/sh\ngit --work-tree=/path/to/deployment --git-dir=/home/pi/mycode.git checkout -f\n</code></pre>\n<p> Explanation: <code>--work-tree</code> tells where the hook should redirect code to and <code>--git-dir</code> directs to the repository directory (so that git can compare histories).</p>\n<p> Make sure that the file is executable</p>\n<pre><code>chmod +x post-receive\n</code></pre>\n<p>Now in your <em>local</em> version of repository add a <strong><em>new remote</em></strong></p>\n<pre><code>git add remote mydevice ssh://pi@raspberry/home/pi/mycode.git\n</code></pre>\n<p>After that you are almost ready! Run the test push: </p>\n<pre><code> touch test.txt\n git add text.txt\n git commit -m "test"\n git push remote mydevice master\n</code></pre>\n<p>Now on your device go to: <code>/path/to/deployment</code>. You should see: </p>\n<pre><code> cd /path/to/deployment\n ls -al  \n ... \n test.txt\n ...\n</code></pre>\n<p>That\'s it! Hope it helped! Cheers!</p>\n<style type="text/css">\n  \n</style>',frontmatter:{date:"2018-04-22",path:"/git-device-deploy",title:"Deploy code to embedded device with Git!",excerpt:"Send your code to device without usb, scp, rsync. Fast workflow.",tags:["git","deploy","hooks","repository"]}}],tagName:"git"}}}});
//# sourceMappingURL=path---tags-git-52f05d7d850c1f1dc8c1.js.map