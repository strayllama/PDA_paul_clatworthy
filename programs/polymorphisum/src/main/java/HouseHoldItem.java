public class HouseHoldItem implements IStock {
    private String name;
    private Integer price;

    public HouseHoldItem(String name,
                        Integer price) {
        this.name = name;
        this.price = price;
    }

    @Override
    public Integer getPrice() {
        return this.price;
    }
}
