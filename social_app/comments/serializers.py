from . models import Comment
from rest_framework import serializers
from account.serializers import UserSerializer
from django.contrib.auth.models import User



class CommentSerializer(serializers.ModelSerializer):
    author_detail = UserSerializer(source='author', read_only=True)
    
    class Meta:
        model = Comment
        fields = ['id','post','content','author','created_at','author_detail']




