#include <stdio.h>
#include <cs50.h>
 
int main(void)
{
 
    int height, rows, spaces, hashs;
  
    do
    {
        printf("Height: ");
        height = get_int();
    }
    while ((height < 0) || (height > 23));
 
    for (rows = 1; rows <= height; rows++) 
    {
        for (spaces = (height - rows); spaces > 0; spaces--)
        {
            printf(" "); 
        }
 
        for (hashs = 1; hashs <= (rows + 1); hashs++)
        {   
            printf("#"); 
        }
 
        printf("\n");
    }
    return 0;
}