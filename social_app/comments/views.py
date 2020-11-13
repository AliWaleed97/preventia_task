from . models import Comment
from rest_framework import viewsets,filters
from comments.serializers import CommentSerializer
# Create your views here.

class CommentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    filter_fields = ('post','author')

