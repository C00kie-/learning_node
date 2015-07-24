//ex1 babysteps
var sum = 0;

function calcul()
{

	var sum = 0;
	for (i = 1; i < process.argv.length; i++)
	{
		if (i >= 2)
		{
			sum +=  Number(process.argv[i]);
		}
	}
	console.log(sum);
};

calcul();
