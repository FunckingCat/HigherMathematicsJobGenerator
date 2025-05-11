from rest_framework import viewsets
from .models import Templates
from .serializers import TemplatesSerializer



class TemplatesViewSet(viewsets.ModelViewSet):
    queryset = Templates.objects.all()
    serializer_class = TemplatesSerializer