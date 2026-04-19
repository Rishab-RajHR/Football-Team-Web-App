from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import *
from .models import *
from rest_framework.response import Response

class CountryViewset(viewsets.ViewSet):
   permission_classes = [permissions.AllowAny]
   queryset = Country.objects.all()  
   serializers_class = CountrySerializer

   def list(self, request):
      queryset = Country.objects.all()
      serializers = self.serializers_class(queryset, many=True)
      return Response(serializers.data)
   

class LeagueViewset(viewsets.ViewSet):
   permission_classes = [permissions.AllowAny]
   queryset = League.objects.all()  
   serializers_class = LeagueSerializer

   def list(self, request):
      queryset = League.objects.all()
      serializers = self.serializers_class(queryset, many=True)
      return Response(serializers.data)


class CharacteristicViewset(viewsets.ViewSet):
   permission_classes = [permissions.AllowAny]
   queryset = Characteristic.objects.all()  
   serializers_class = CharacteristicSerializer

   def list(self, request):
      queryset = Characteristic.objects.all()
      serializers = self.serializers_class(queryset, many=True)
      return Response(serializers.data)
   
class FootballClubViewset(viewsets.ViewSet):
   permission_classes = [permissions.AllowAny]
   queryset = FootballClub.objects.all()
   serializers_class = FootballClubSerializer

   def list(self, request):
       queryset = FootballClub.objects.all()
       serializers = self.serializers_class(queryset, many=True)
       return Response(serializers.data)

   def create(self, request):
      serializers = self.serializers_class(data=request.data)
      if serializers.is_valid():
         serializers.save()
         return Response(serializers.data)
      else:
         return Response(serializers.errors, status=400)
      
   def retrieve(self,request,pk=None):
      queryset =  self.queryset.get(pk=pk)
      serializers = self.serializers_class(queryset)
      return Response(serializers.data)
   
   def update(self,request,pk=None):
       queryset = self.queryset.get(pk=pk)
       serializers = self.serializers_class(queryset, data=request.data)
       if serializers.is_valid():
          serializers.save()
          return Response(serializers.data)
       else:
          return Response(serializers.errors, status=400)
       
   def destroy(self, request, pk=None):
       queryset = self.queryset.get(pk=pk)
       queryset.delete()
       return Response(status=204)