from . models import Post
from rest_framework import viewsets,permissions,filters
from posts.serializers import PostSerializer
from django_filters.rest_framework import DjangoFilterBackend



class PostViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [DjangoFilterBackend,filters.OrderingFilter]
    filter_fields = ('author','created_at')


