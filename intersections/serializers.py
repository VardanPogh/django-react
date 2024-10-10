from rest_framework import serializers
from .models import Intersection

class IntersectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Intersection
        fields = '__all__'
