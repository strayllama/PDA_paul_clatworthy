import java.util.ArrayList;

public class Shop {
    private String name;
    private ArrayList<IStock> stockList;

    public Shop(String name) {
        this.name = name;
    }

    public void addStock(IStock stock) {
        stockList.add(stock);
    }

}
