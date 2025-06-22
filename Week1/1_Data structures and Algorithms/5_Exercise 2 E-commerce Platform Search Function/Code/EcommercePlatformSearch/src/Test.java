public class Test {
    public void test(){
        Product[] products = {
                new Product(105, "Mouse", "Electronics"),
                new Product(101, "Laptop", "Electronics"),
                new Product(108, "Shoes", "Footwear"),
                new Product(103, "Watch", "Accessories"),
        };
        System.out.println("Linear Search for ID 108:");
        Product result1 = LinearSearch.searchById(products, 108);
        System.out.println(result1.productId+" "+result1.productName+" "+result1.category);
        System.out.println("Binary Search for ID 108:");
        BinarySearch.sortById(products);
        Product result2 = BinarySearch.searchById(products, 108);
        System.out.println(result2.productId+" "+result1.productName+" "+result1.category);
    }
}
