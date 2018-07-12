```
import docker

client = docker.from_env()
for service in client.services.list():
    print(service.name)
scanning_service = client.services.get('stack_scanning')
scanning_service.attrs['Spec']['Mode']['Replicated']['Replicas']
scanning_service.tasks()
scanning_service.scale(3)
```