from rest_framework.serializers import ModelSerializer
from .models import Tweet


class TweetSerializer(ModelSerializer):
    class Meta:
        model = Tweet
        fields = (
            'id',
            'nickname',
            'text_content',
            'created_at'
        )
