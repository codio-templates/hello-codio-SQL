----------

## Iterating Over a List

Java allows you to iterate over an array. That means starting with the first element and progressing through to the end of the array. Using a for loop is the easiest way to iterate over an array.

![Iterating Over a List](.guides/img/iterating-list-variable-name.png)

<details><summary>**numbers, numbers[i], and numbers.length**</summary>In the example below, the iteration variable is `i` and the list is named `numbers`. This means that `numbers[i]` represents the current element being accessed by the loop. `numbers.length` is used in the loop condition to ensure that `numbers[i]` does not attempt to access an element that does not exist.</details>

```java
int[] numbers = {1, 2, 3, 4};
for(int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}
```

[Code Visualizer](open_tutor code/Demo.java)
{Try it}(sh .guides/bg.sh javac code/Demo.java java -cp code/ Demo )

|||challenge
## What happens if you:
* Change the [print statement](open_file code/Demo.java panel=0 ref="System.out.print" count=1) to `System.out.print(numbers)`?

[Remove highlighting](open_file code/Demo.java panel=0)

|||

[Code Visualizer](open_tutor code/Demo.java)
{Try it}(sh .guides/bg.sh javac code/Demo.java java -cp code/ Demo 2)

{Check It!|assessment}(parsons-puzzle-2650837085)
