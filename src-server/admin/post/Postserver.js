
var Post = require('../../../models/Post');
var PostCategory = require('../../../models/PostCategory');

function Postserver(app) {
  app.post('/api/post', function(req, res, next) {
  var id = req.body.id;
  var title =req.body.title;
  var introduce = req.body.introduce;
  var pictureURL = req.body.pictureURL;
  var content = req.body.content;
  var dateStart = req.body.dateStart;
  var link =req.body.link;
  var postCategory= req.body.postCategory;

   Post.findOne({ _id: id }, function(err, post) {
  if ( (err)|| (!post) )
  {
    try{
         var post = new Post({
                    title:title,
                    introduce:introduce,
                    content:content,
                    pictureURL:pictureURL,
                    dateStart:dateStart,
                    link:link,
                    postCategory:postCategory
                  });
         post.save(function(err) {
         if (err) return next(err);
         res.send({ message: title + ' được thêm thành công!' });
         });
         } catch (e) {
            res.status(e).send({ message: 'Có lỗi xảy ra khi thêm bài viết ' });
        }
  }
  else
  {
        post.update({ $set: {
                    title:title,
                    introduce:introduce,
                    content:content,
                    pictureURL:pictureURL,
                    dateStart:dateStart,
                    link:link,
                    postCategory:postCategory
        } }, function(err) {
            if (err) return next(err);
            res.send({ message: title + ' has been updated successfully!' });
          });


  }})
   });
/**
 * POST /api/deletepost
 * Delete a Post from the database.
 */
app.post('/api/deletepost', function(req, res, next) {
  var postId = req.body.id;
  Post.findOne({ _id: postId }, function(err, post) {
    if (err) return next(err);

    if (!post) {
      return res.status(404).send({ message: 'post not found.' });
    }
      post.remove();
      res.send({ message:'Bài đăng có chủ đề '+ post.title + ' đã được xóa' });


  });
});
/**
 * GET /api/post
 * Return posts from the database.
 */

app.get('/api/post', function(req, res, next) {
  try{
   Post
   .find()
   .populate('postCategory')
   .exec(function(err,posts){
    if(err) next(err);
    res.send(posts);
   })
      } catch (e) {
      res.status(e);
          }
        });
/**
 * GET /api/post/:id
 * Get a post from the database.
 */
  app.get('/api/post/:id', function(req, res, next) {
  var id = req.params.id;
  Post.findOne({ _id: id }, function(err, post) {
    if (err) return next(err);

    if (!post) {
      return res.status(404).send({ message: 'Không tìm thấy bài đăng phù hợp' });
    }
    res.send(post);
  });
});

/**
 * GET /api/post/count
 * AddpostCategory to database
 */
  app.get('/api/post/count', function(req, res, next) {
  Post.count(function(err, number) {
    if (err) return next(err);
    res.send(number);
  });
});
/**
 * POST CATEGORY
 *AddpostCategorythe database.
 */
app.post('/api/postCategory', function(req, res, next) {
  var id = req.body.id;
  var nameCate =req.body.nameCate;
  var Type = req.body.Type;
  

   PostCategory.findOne({ _id: id }, function(err, postCategory) {
  if ( (err)|| (!postCategory) )
  {
    try{
         var postCategory = new PostCategory({
                    nameCate:nameCate,
                    Type:Type                   
                  });
         postCategory.save(function(err) {
         if (err) return next(err);
         res.send({ message: nameCate + ' được thêm thành công!' });
         });
         } catch (e) {
            res.status(e).send({ message: 'Có lỗi xảy ra khi thêm bài viết ' });
        }
  }
  else
  {
        postCategory.update({ $set: {
                    nameCate:nameCate,
                    Type:Type              
        } }, function(err) {
            if (err) return next(err);
            res.send({ message: nameCate + ' đã được cập nhập thành công!' });
          });


  }})
   });
  /**
 * GET /api/postCategory/:id
 * Get a postCategory from the database.
 */
  app.get('/api/postCategory/:id', function(req, res, next) {
  var id = req.params.id;
  PostCategory.findOne({ _id: id }, function(err, postCategory) {
    if (err) return next(err);

    if (!postCategory) {
      return res.status(404).send({ message: 'Không tìm thấy chủ đề bài viết phù hợp' });
    }
    res.send(postCategory);
  });
});
  /**
 * POST /api/deletepostCategory
 * Delete a postCategory from the database.
 */
app.post('/api/deletepostCategory', function(req, res, next) {
  var postCateId = req.body.id;
  PostCategory.findOne({ _id: postCateId }, function(err, postCate) {
    if (err) return next(err);

    if (!postCate) {
      return res.status(404).send({ message: 'postCate not found.' });
    }
      postCate.remove();
      res.send({ message:'Bài đăng có chủ đề '+ postCate.nameCate + ' đã được xóa' });


  });
});
  /**
 * GET /api/postCategory
 * Return postCategory from the database.
 */

app.get('/api/postCategory', function(req, res, next) {
  try{
   PostCategory
   .find()
   .exec(function(err,postCates){
    if(err) next(err);
    res.send(postCates);
   })
      } catch (e) {
      res.status(e);
          }
        });
  /**
 * GET /api/postCategory/count
 */
  app.get('/api/postCategory/count', function(req, res, next) {
  PostCategory.count(function(err, number) {
    if (err) return next(err);
    res.send(number);
  });
});
}
module.exports = Postserver;
