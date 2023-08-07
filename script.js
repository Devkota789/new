import java.awt.Color;

public class LightenColorExample {

    public static Color lightenColor(Color color, int factor) {
        int red = Math.min(color.getRed() + factor, 255);
        int green = Math.min(color.getGreen() + factor, 255);
        int blue = Math.min(color.getBlue() + factor, 255);
        return new Color(red, green, blue);
    }

    public static void main(String[] args) {
        Color originalColor = new Color(50, 100, 150);
        int lighteningFactor = 50;

        Color lighterColor = lightenColor(originalColor, lighteningFactor);

        System.out.println("Original RGB: " + originalColor.getRed() + ", " + originalColor.getGreen() + ", " + originalColor.getBlue());
        System.out.println("Lighter RGB: " + lighterColor.getRed() + ", " + lighterColor.getGreen() + ", " + lighterColor.getBlue());
    }
}
