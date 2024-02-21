document.getElementById('content').innerHTML = '<p>BlogWeb</p>';

var blogPosts = [
    {
        title: 'First Blog',
        summary: 'summary',
        content: 'content'
    },
    {
        title: 'Second Blog',
        summary: 'summary',
        content: 'content'
    }
];

var contentDiv = document.getElementById('content');
for (var i = 0; i < blogPosts.length; i++) {
    var post = blogPosts[i];
    contentDiv.innerHTML += '<h2>' + post.title + '</h2>';
    contentDiv.innerHTML += '<p>' + post.summary + '</p>';
    contentDiv.innerHTML += '<p>' + post.content + '</p>';
}
