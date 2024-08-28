module.exports = {
    generateStaticParams: function () {
      return {
        '/': { page: '/' },
        // '/blog/nextjs': { page: '/blog/[post]/comment/[id]' },        // wrong
        '/blog/nextjs/comment/1': { page: '/blog/[post]/comment/[id]' }, // correct
      }
    },
  }