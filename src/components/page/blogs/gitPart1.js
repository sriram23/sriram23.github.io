const gitPart1 = `
<style>
.code {
    padding: 1rem;
    background-color: #D8D8D8;
    border-left: 0.5rem solid #000;
}
h2, h3, p {
    padding: 0.5rem;
}
.image-container {
    display: flex;
    justify-content: center;
}
.image {
    width: 100%;
    height: 100%;
}
</style>
<div class="image-container">
    <img class="image" src="https://miro.medium.com/max/700/1*dK0Ujk5nhwvzgvxbi6rigA.png" alt="git logo"/>
</div>
<p>Hello World!</p>
<p>In this blog let us see what is git and how it is used in industry.</p>
<h2>What is Git?</h2>
<p>Git is a Distributed Version Control System (DVCS), that holds the whole history of project, including the changes. It is built with security, performance and flexibility in mind. It was developed in 2005 by Linus Torvalds the famous creator of Linux kernel.</p>
<h2>What is a Version Control System (VCS)?</h2>
<p>A system that records changes to a file or set of files over time is called a Version Control System. This enables us to recall a specific version later.</p>
<h2>Why we need a VCS?</h2>
<li>VCS are essential for collaboration. When many people work on same project, they will be working on shared files. There are many conflicts like only one person will have access to a file at a time. There are chances like some one may overwrite your content. In VCS, this is prevented. Everybody can work on any files, without any conflicts and can merge all into a common version.</li>
<li>It is very hard to maintain different versions of the project, like naming versions, comparing two version, etc. But VSC will make these tasks simple.</li>
<li>We can restore previous versions of the project easily and it acts as backup as well.</li>
<h3>Some of previous version control tools:</h3>
<li>RCS (Revision Control System)</li>
<li>SCCS (Source Code Control System)</li>
<li>Bit Keeper (Proprietary VCS, where Linux is built)</li>
<h2>History of VCS</h2>
<p>As I said earlier, git is a Distributed Version Control System. Let us quickly look into DVCS and other previous VCS.</p>
<ol>
<li><u>Local Versioning System (LVS)</u>: A database that stores different versions of files. Its main drawback is that we cannot collaborate with other team member. Everything is local.</li>
<li><u>Centralized Version control System (CVS)</u>: Here all the versioned files are stored in a centralized server. The members of team can checkout the files from the server. There were certain degree of possibilities to know what other members in the project are doing. Its drawback is every thing is stored in the centralized server. When server crashes, everything is gone. We cannot also work when server is down. Saving entire history of project in a single place is a high risk.</li>
<li><u>Distributed Version Control System (DVCS)</u>: In DVCS, unlike the other VCS, the whole project including history is mirrored into the client’s device. So even when the centralized server crashes, we can revamped from the client’s clone. This enables us to collaborate with different group of people in a different way, simultaneously.</li>
</ol>
<h2>Git vs other DVCS</h2>
<p>Like Git we have other DVCS like Mercurial, Bazzar, Darcs. Let us see how Git stands out from these DVCS.</p>
<li>Git thinks about data, whereas others think about the file changes.</li>
<li>Git stores the snapshots and not the differences.</li>
<li>Nearly every operation is local, as we have the entire history of the project in our local disk. We can work even when we don’t have internet or we have a bad network. The files will be uploaded once we get good network connection.</li>
<li>Integrity: Everything is check-summed before getting stored (SHA1 hash).</li>
<p>Let’s dive technically into git.</p>
<h3>The three states</h3>
<p>There are three states in git</p>
<li>Modified — When some file is modified in the repo.</li>
<li>Staged — When modification are done and files are staged.</li>
<li>Committed — When staged files are finalized and committed.</li>
<h2>How to install?</h2>
<b><u>Linux:</u></b>
<p class="code">$sudo dnf install git-all (For RPM based distributions)</p>
<p class="code">$sudo apt install git-all (For Debian, Ubuntu distributions)</p>
<b><u>Mac:</u></b>
<p class="code">$git — version</p>
<p>If git is not installed, it will prompt to install.</p>
<b><u>Windows:</u></b>
<p class="code">Follow this link: <a href="https://git-scm.com/download/win">https://git-scm.com/download/win</a></p>
<h2>Git config</h2>
<p>Get and set configuration variables that controls all aspects of how git looks and operates</p>
<h3>Global Configuration</h3>
<p>Here we will be configuring things like username, email, etc</p>
<p class="code">git config — global user.name “sriram23”</p>
<p class="code">git config — global user.email <your email></p>
<h2>Repository (or) Repo</h2>
<p>Any directory that has a ‘.git’ directory in it are called git repository. The ‘.git’ directory will have the complete history of the project.</p>
<h3>Creating a git repo</h3>
<p>I will create a new directory and make it as a git repository.</p>
<p class="code">
$mkdir myFirstGitRepo
$cd myFirstGitRepo
$git init
</p>
<p>This will create a directory called myFirstGitRepo and once git init command is executed, a .git directory will be created.</p>
<h2>Cloning an existing repo</h2>
<p>We can clone an existing remote repo (we will see about the remote repo in upcoming chapters). We can do it by using the git clone command.</p>
<p class="code">git clone “https://github.com/sriram23/Battery-Tracker.git”</p>
<p>To summarize, in this blog, we learned about Git, VCS and its history, Git installation and Git repo. In the upcoming blogs, we will explore more about git.</p>
<p>Thank you!</p>
`
export default gitPart1