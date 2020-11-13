from . models import Post
from rest_framework import serializers
from account.serializers import UserSerializer
from comments.serializers import CommentSerializer
from rest_framework.permissions import IsAuthenticated



class PostSerializer(serializers.ModelSerializer):
    author_detail= UserSerializer(source='author',read_only=True)
    comments = CommentSerializer(many=True,required=False)
    class Meta:
        model = Post
        fields = ['id','title','content','author','created_at','comments','author_detail']
   


