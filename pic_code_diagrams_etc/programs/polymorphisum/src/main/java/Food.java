public class Food implements IStock {
    private String name;
    private Integer price;

    public Food(String name,
                Integer price) {
        this.name = name;
        this.price = price;
    }

    @Override
    public Integer getPrice() {
        return this.price;
    }
}
