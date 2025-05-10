from django.contrib import admin
from generatedTask.models import GeneratedTask
# Register your models here.
class GeneratedTaskAdmin(admin.ModelAdmin):
    list_display = ('id','title','code', 'created_at')
    list_display_links = ('id','code')
    search_fields = ('id','title','code')
    list_editable = ('title',)
    list_filter = ('title',)



admin.site.register(GeneratedTask, GeneratedTaskAdmin)