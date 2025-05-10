from django.db import models

# Create your models here.
class Templates(models.Model):

    created_at = models.DateTimeField(verbose_name='время создания', auto_now_add = True)
    update_at = models.DateTimeField(verbose_name='время обновления', auto_now = True)
    title = models.CharField(verbose_name='Название темы', max_length=255)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Тема'
        verbose_name_plural = 'Темы'
        ordering = ['id', 'title']
