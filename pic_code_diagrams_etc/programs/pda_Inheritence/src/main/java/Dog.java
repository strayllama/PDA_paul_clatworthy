public class Dog extends Animal {
    private int numberOfLegsLeft;
    private int tails;

    public Dog(String noise, int numberOfLegsLeft) {
        super(noise);
        this.tails = 1;
        this.numberOfLegsLeft = numberOfLegsLeft;
    }

    public int getNumberOfLegsLeft() {
        return this.numberOfLegsLeft;
    }

    public int getNumberOfLimbs() {
        return numberOfLegsLeft + super.getHeads() + this.tails;
    }

}
