from rest_framework import serializers
from .models import GeneratedTask

class GeneratedTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeneratedTask
        fields = '__all__'