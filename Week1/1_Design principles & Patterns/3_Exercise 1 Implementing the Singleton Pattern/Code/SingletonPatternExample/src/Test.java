public class Test {
    public void test(){
        Logger instance1=Logger.getInstance();
        Logger instance2=Logger.getInstance();
        if(instance1==instance2)
        {
            System.out.println("Only one instance of Logger is created, Singleton design pattern is successful");
        }
        else {
            System.out.println("Singleton design pattern is not implemented correctly");
        }
    }

}
