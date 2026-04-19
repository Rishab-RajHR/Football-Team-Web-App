from django.db import models

# Create your models here.

class Country(models.Model):
   name = models.CharField(unique=True, max_length=100)
   created = models.DateTimeField(auto_now_add=True)
   modified = models.DateTimeField(auto_now=True)

   def __str__(self):
       return self.name


class League(models.Model):
   name = models.CharField(unique=True, max_length=100)
   created = models.DateTimeField(auto_now_add=True)
   modified = models.DateTimeField(auto_now=True)

   def __str__(self):
       return self.name
   

class Characteristic(models.Model):
   name = models.CharField(unique=True, max_length=100)
   created = models.DateTimeField(auto_now_add=True)
   modified = models.DateTimeField(auto_now=True)

   def __str__(self):
       return self.name
   
class FootballClub(models.Model):
    name = models.CharField(unique=True, max_length=100)
    description = models.CharField(max_length=1000)
    attendance = models.IntegerField(null=True)
    city = models.CharField(max_length=100)
    country = models.ForeignKey(Country, on_delete=models.CASCADE, related_name='clubs')
    league = models.ForeignKey(League, on_delete=models.CASCADE, related_name='clubs')
    characteristic = models.ManyToManyField(Characteristic, related_name='clubs' , blank=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
