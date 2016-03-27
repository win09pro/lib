var Post = require('../../models/Post');
function Postserver(app) {
  app.post('/api/post', function(req, res, next) {
  var id = req.body.id;
  var title =req.body.title;
  var introduce = req.body.introduce;
  var content = req.body.content;
  var dateStart = req.body.dateStart;  
  
   Post.findOne({ _id: id }, function(err, post) {
  if ( (err)|| (!post) )
  {
    try{ 
         var post = new Post({           
                    title:title,
                    introduce:introduce,
                    content:content,                   
                    dateStart:dateStart          
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
                    dateStart:dateStart          
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
 * Get number of posts from the database.
 */      
  app.get('/api/post/count', function(req, res, next) { 
  Post.count(function(err, number) {
    if (err) return next(err);   
    res.send(number);
  });
});
  


}
module.exports = Postserver;