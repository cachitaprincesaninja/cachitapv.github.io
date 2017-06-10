#include <stdio.h>
#include <cs50.h>
#include <math.h>
 
int main(void)
{
    int coins = 0;
    printf("Change: ");
    float change = get_float();
    change = change * 100;
 
    {
 
        while (change / 25 >= 1)
        {
            change = change - 25;
            coins ++;
        }
 
        while (change / 10 >= 1)
        {
            change = change - 10;
            coins ++;
        }
        
        while (change / 5 >= 1) 
        {
            change = change - 5;
            coins ++;
        }
        
        while (change / 1 >= 1) 
        {
            change = change - 1;
            coins ++;
        }
    }      
        printf("%i\n", coins);
}