//ex2 babysteps

/*Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers
to the console (stdout).
*/
var sum = 0;

function calcul()
{
	var sum = 0;
	for (i = 1; i < process.argv.length; i++)
	{
		if (i > 1)
			sum +=  Number(process.argv[i]);
	}
	console.log(sum);
};

calcul();
