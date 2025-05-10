from rest_framework import viewsets
from .models import TaskStatus
from .serializers import TaskStatusSerializer



class TaskStatusViewSet(viewsets.ModelViewSet):
    queryset = TaskStatus.objects.all()
    serializer_class = TaskStatusSerializer