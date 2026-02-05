import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const floatingVariants = {
  float1: {
    y: [0, -30, 0],
    x: [0, 10, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  float2: {
    y: [0, -20, 0],
    x: [0, -15, 0],
    rotate: [0, -5, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  float3: {
    y: [0, -25, 0],
    x: [0, 15, 0],
    rotate: [0, 10, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {/* Graduation cap */}
      <motion.div
        variants={floatingVariants}
        animate="float1"
        className="absolute top-32 right-[10%] w-32 h-32 opacity-30"
        style={{ filter: 'blur(1px)' }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl blur-xl opacity-50" />
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1659080907168-d567d70d27ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGdyYWR1YXRpb24lMjBjYXAlMjBpY29uJTIwYWNhZGVtaWN8ZW58MXx8fHwxNzcwMjEzMTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Graduation Cap"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Lightbulb */}
      <motion.div
        variants={floatingVariants}
        animate="float2"
        className="absolute top-[40%] left-[5%] w-28 h-28 opacity-25"
        style={{ filter: 'blur(1px)' }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-2xl opacity-60 animate-pulse" />
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1765987592203-2b4cad695e08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodGJ1bGIlMjBpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMGdsb3d8ZW58MXx8fHwxNzcwMjEzMTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Glowing Lightbulb"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* DNA Strand */}
      <motion.div
        variants={floatingVariants}
        animate="float3"
        className="absolute bottom-32 right-[15%] w-36 h-36 opacity-20"
        style={{ filter: 'blur(1px)' }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50" />
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1767452733725-1087311257f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxETkElMjBzdHJhbmQlMjBzY2llbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzAyMTMxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="DNA Strand"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Abstract geometric shapes */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[60%] left-[80%] w-24 h-24 opacity-10"
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-teal-400 rounded-3xl transform rotate-45" />
      </motion.div>

      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[20%] left-[15%] w-20 h-20 opacity-10"
      >
        <div className="w-full h-full border-4 border-purple-400 rounded-full" />
      </motion.div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
          className="absolute rounded-full bg-gradient-to-br from-blue-400 to-teal-400"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Glow orbs */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[15%] right-[25%] w-64 h-64 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-[20%] left-[20%] w-72 h-72 bg-gradient-to-tl from-teal-400/20 to-transparent rounded-full blur-3xl"
      />
    </div>
  );
}
