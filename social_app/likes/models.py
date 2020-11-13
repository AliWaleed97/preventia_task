from django.db import models
from posts.models import Post
from django.contrib.auth.models import User

# Create your models here.
class Like(models.Model):
    post = models.ForeignKey(Post,on_delete=models.CASCADE)
    liker = models.ForeignKey(User,on_delete=models.CASCADE)


