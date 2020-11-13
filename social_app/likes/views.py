from . models import Like
from rest_framework import viewsets
from likes.serializers import LikeSerializer


class LikeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows likes to be viewed or edited.
    """
    queryset = Like.objects.all()
    serializer_class = LikeSerializer
    filter_fields = ('post','liker')


