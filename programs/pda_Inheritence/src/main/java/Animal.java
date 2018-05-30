public abstract class Animal {
    private String noise;
    private int heads;

    public Animal(String noise) {
        this.noise = noise;
        this.heads = 1;
    }

    public String getNoise() {
        return "I make " + this.noise + " as my noise";
    }

    public int getHeads() {
        return this.heads;
    }

}
