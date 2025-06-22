public class Main {
    public static void main(String[] args) {
        double presentValue = 10000;
        double rate = 0.08;
        int years = 5;
        double futureValue = FinancialForecast.calculateFutureValue(presentValue, rate, years);
        System.out.printf("Future Value after " + years + " years: %.2f",futureValue);
    }
}