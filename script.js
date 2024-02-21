document.getElementById('content').innerHTML = '<p>这是我的第一篇博客文章。</p>';

var blogPosts = [
    {
        title: '我的第一篇博客文章',
        summary: '这是我的第一篇博客文章的摘要，欢迎阅读。',
        content: '这是我的第一篇博客文章的内容，感谢你的阅读。'
    },
    {
        title: '我的第二篇博客文章',
        summary: '这是我的第二篇博客文章的摘要，欢迎阅读。',
        content: '这是我的第二篇博客文章的内容，感谢你的阅读。'
    }
];

var contentDiv = document.getElementById('content');
for (var i = 0; i < blogPosts.length; i++) {
    var post = blogPosts[i];
    contentDiv.innerHTML += '<h2>' + post.title + '</h2>';
    contentDiv.innerHTML += '<p>' + post.summary + '</p>';
    contentDiv.innerHTML += '<p>' + post.content + '</p>';
}
