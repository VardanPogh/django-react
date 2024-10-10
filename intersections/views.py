from rest_framework import viewsets
from .models import Intersection
from .serializers import IntersectionSerializer

class IntersectionViewSet(viewsets.ModelViewSet):
    queryset = Intersection.objects.all()
    serializer_class = IntersectionSerializer
