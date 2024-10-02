import { Button } from '@/components/ui/Button'
import Link from "next/link";

export default function SignUpCallToActionSection() {
    return (
        <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to simplify your attendance tracking?</h2>
          <p className="text-xl mb-8">Join thousands of teachers who trust ClassTrack for efficient class management.</p>
          <Link href="/signup">
          <Button variant="secondary" size="lg" className="text-lg">
            Sign Up Now
          </Button>
          </Link>
        </div>
      </section>
    );
  }
  