from django.db import models
from templates.models import Templates

# Create your models here.
class Task(models.Model):

    created_at = models.DateTimeField(verbose_name='время создания', auto_now_add = True)
    update_at = models.DateTimeField(verbose_name='время обновления', auto_now = True)
    title = models.CharField(verbose_name='Название задания', max_length=255)
    view = models.TextField(verbose_name='Отображение задания')
    data_task = models.TextField(verbose_name='Содержание задания')
    tempalates = models.ManyToManyField(Templates, verbose_name='Тема', related_name='task_templates', blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Задание'
        verbose_name_plural = 'Задания'
        ordering = ['id', 'title']
