from django.db import models

# Create your models here.
class TaskStatus(models.Model):

    created_at = models.DateTimeField(verbose_name='время создания', auto_now_add = True)
    update_at = models.DateTimeField(verbose_name='время обновления', auto_now = True)
    status = models.CharField(verbose_name='Номер группы', max_length=255)

    def __str__(self):
        return self.status

    class Meta:
        verbose_name = 'Статус выполнения'
        verbose_name_plural = 'Статусы выполнения'
        ordering = ['id', 'status']
