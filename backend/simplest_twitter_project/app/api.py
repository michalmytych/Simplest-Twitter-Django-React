from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import TweetSerializer, Tweet


@api_view(['GET', 'POST'])
def tweets_list(request):
    if request.method == 'GET':
        tweets = Tweet.objects.all()
        serializer = TweetSerializer(tweets, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = TweetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
