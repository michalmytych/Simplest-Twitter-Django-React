from django.db import models


class Tweet(models.Model):
    nickname = models.CharField(max_length=32)
    text_content = models.TextField(max_length=256)
    created_at = models.DateTimeField()

    class Meta:
        ordering = ['-created_at']
