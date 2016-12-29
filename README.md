# PubSub


PubSub is a javascript implementation of the [Publisher Subscriber Pattern](https://msdn.microsoft.com/en-us/library/ff649664.aspx).


## How To Use

```html
	<script src="scripts/PubSub.js"></script>
```
```javascript
		PubSub.on("componentUpdate", handleComponentUpdate);

		function handleComponentUpdate(data){
			console.log(data);
			...
		}

		PubSub.update("componentUpdate","hello");
```