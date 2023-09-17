hexo.extend.helper.register("request_cheatsheet", function () {
    return `https://github.com/huynhthanhdan1710/reference/issues/new?title=Cheatsheet+request%3A+&labels=request&template=cheatsheet-request.md&assignee=huynhthanhdan1710`;
});

hexo.extend.helper.register("contributing", function () {
    return `https://github.com/huynhthanhdan1710/reference`;
});


hexo.extend.helper.register("edit_page", function () {
    let postPage = this.page['layout'] === 'post';
    let url = "https://github.com/huynhthanhdan1710/reference";
    if (postPage) {
        url += `/blob/main/source/_posts/${this.page.slug}.md`;
    }
    return url;
});