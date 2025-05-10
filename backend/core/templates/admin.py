from django.contrib import admin
from templates.models import Templates
# Register your models here.
class TemplatesAdmin(admin.ModelAdmin):
    list_display = ('id','title', 'created_at',)
    list_display_links = ('id','title')
    search_fields = ('id','title',)



admin.site.register(Templates, TemplatesAdmin)