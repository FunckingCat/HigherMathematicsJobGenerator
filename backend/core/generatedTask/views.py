from rest_framework import viewsets
from .models import GeneratedTask
from .serializers import GeneratedTaskSerializer



class GeneratedTaskViewSet(viewsets.ModelViewSet):
    queryset = GeneratedTask.objects.all()
    serializer_class = GeneratedTaskSerializer