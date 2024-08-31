import "./resources.css";

export default function displayResources() {
    const main = document.querySelector("main");
    main.className = "resources-main"; // Update class here
    main.innerHTML = "";

    const resourcesSection = document.createElement("section");
    resourcesSection.className = "resources-section";

    const resourcesContent = `
        <h1>Cheat Codes</h1>
        
        <div class="resource-item">
            <h2>PHP Advanced Techniques</h2>
            <pre class="resource-code"><code>
// Handling PHP errors with custom exceptions
try {
    // Some code that may throw an exception
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}

// Dynamic class loading with spl_autoload_register
spl_autoload_register(function ($class_name) {
    include $class_name . '.php';
});
            </code></pre>
        </div>

        <div class="resource-item">
            <h2>JavaScript Best Practices</h2>
            <pre class="resource-code"><code>
// Avoiding callback hell with Promises
function asyncTask() {
    return new Promise((resolve, reject) => {
        // Perform async operation
        if (success) {
            resolve('Task completed');
        } else {
            reject('Task failed');
        }
    });
}

// Efficient DOM manipulation with DocumentFragment
const fragment = document.createDocumentFragment();
items.forEach(item => {
    const element = document.createElement('div');
    element.textContent = item;
    fragment.appendChild(element);
});
document.body.appendChild(fragment);
            </code></pre>
        </div>

        <div class="resource-item">
            <h2>Java Design Patterns</h2>
            <pre class="resource-code"><code>
// Singleton Pattern
public class Singleton {
    private static Singleton instance;

    private Singleton() {}

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}

// Factory Pattern
public interface Shape {
    void draw();
}

public class Circle implements Shape {
    public void draw() {
        System.out.println("Circle::draw()");
    }
}

public class ShapeFactory {
    public Shape getShape(String shapeType) {
        if (shapeType == null) return null;
        if (shapeType.equalsIgnoreCase("CIRCLE")) {
            return new Circle();
        }
        return null;
    }
}
            </code></pre>
        </div>

        <div class="resource-item">
            <h2>WordPress Customization</h2>
            <pre class="resource-code"><code>
// Registering custom post types
function create_custom_post_type() {
    register_post_type('custom_type',
        array(
            'labels' => array(
                'name' => __('Custom Types'),
                'singular_name' => __('Custom Type')
            ),
            'public' => true,
            'has_archive' => true,
        )
    );
}
add_action('init', 'create_custom_post_type');

// Custom query using WP_Query
$query = new WP_Query(array(
    'post_type' => 'custom_type',
    'posts_per_page' => 10
));

if ($query->have_posts()) {
    while ($query->have_posts()) {
        $query->the_post();
        the_title();
        the_content();
    }
}
            </code></pre>
        </div>

        <div class="resource-item">
            <h2>TypeScript Tips</h2>
            <pre class="resource-code"><code>
// Strict typing with interfaces
interface User {
    id: number;
    name: string;
    email?: string; // Optional property
}

const getUser = (user: User): void => {
    console.log(user.name);
}

// Utility types for transformations
type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;
            </code></pre>
        </div>

        <div class="resource-item">
            <h2>Python Advanced Features</h2>
            <pre class="resource-code"><code>
// Context managers with 'with' statements
with open('file.txt', 'r') as file:
    content = file.read()

// List comprehensions with conditions
squares = [x*x for x in range(10) if x % 2 == 0]

// Decorators for meta-programming
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper
            </code></pre>
        </div>

        <div class="resource-item">
            <h2>Git Commands</h2>
            <pre class="resource-code"><code>
// GitHub repository management
git clone <repository_url>
git remote add origin <url>
git push -u origin master

// Navigation and status
git status
git diff
git log --oneline

// Branching
git branch <branch_name>
git checkout <branch_name>
git merge <branch_name>
            </code></pre>
        </div>
    `;

    resourcesSection.innerHTML = resourcesContent;
    main.appendChild(resourcesSection);
}
